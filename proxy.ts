import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default function proxy(request: NextRequest) {
  const country = request.geo?.country || "unknown"

  // Block India completely
  if (country === "IN") {
    const userAgent = request.headers.get("user-agent") || ""
    if (!userAgent.toLowerCase().includes("googlebot")) {
      return new NextResponse("Access denied", { status: 403 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
