#!/usr/bin/env node
/**
 * Submit all indexable URLs to IndexNow via the local API route.
 * Usage: INDEXNOW_API_SECRET=xxx INDEXNOW_KEY=yyy node scripts/submit-indexnow.mjs [baseUrl]
 */
const baseUrl = process.argv[2] || process.env.SITE_URL || 'http://localhost:3000';
const secret = process.env.INDEXNOW_API_SECRET;

if (!secret) {
  console.error('Set INDEXNOW_API_SECRET to call POST /api/indexnow');
  process.exit(1);
}

const res = await fetch(`${baseUrl}/api/indexnow`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${secret}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({}),
});

const data = await res.json();
console.log(res.status, data);
process.exit(res.ok ? 0 : 1);
