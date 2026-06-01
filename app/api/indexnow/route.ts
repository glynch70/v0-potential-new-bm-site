import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SITE_HOST = 'bear-media.com';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

function collectIndexableRoutes(dir: string, currentRoute = ''): string[] {
  const routes: string[] = [];
  if (!fs.existsSync(dir)) return routes;

  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file.startsWith('_') || file.startsWith('.') || file === 'api') continue;
      routes.push(
        ...collectIndexableRoutes(fullPath, currentRoute ? `${currentRoute}/${file}` : file)
      );
    } else if (file === 'page.tsx') {
      routes.push(currentRoute);
    }
  }
  return routes;
}

export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_API_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: 'INDEXNOW_API_SECRET is not configured' },
      { status: 503 }
    );
  }

  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return NextResponse.json({ error: 'INDEXNOW_KEY is not configured' }, { status: 503 });
  }

  const appDir = path.join(process.cwd(), 'app');
  const rawRoutes = collectIndexableRoutes(appDir).filter(
    (route) => !route.includes('[') && !route.includes('(')
  );

  const body = await request.json().catch(() => ({}));
  const customUrls = Array.isArray(body?.urls) ? (body.urls as string[]) : null;

  const urls =
    customUrls ??
    rawRoutes.map((route) =>
      route ? `https://${SITE_HOST}/${route}` : `https://${SITE_HOST}`
    );

  const payload = {
    host: SITE_HOST,
    key,
    keyLocation: `https://${SITE_HOST}/${key}.txt`,
    urlList: urls.slice(0, 10000),
  };

  const indexNowRes = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  return NextResponse.json({
    submitted: urls.length,
    indexNowStatus: indexNowRes.status,
    ok: indexNowRes.ok,
  });
}
