import { NextResponse, type NextRequest } from 'next/server';

/** Vercel Authentication protects previews; this adds indexing and write guards. */
export function proxy(request: NextRequest) {
  if (process.env.VERCEL_ENV !== 'preview') return NextResponse.next();
  const headers = { 'X-Robots-Tag': 'noindex, nofollow, noarchive' };
  if (request.nextUrl.pathname.startsWith('/api/admin/') && !['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
    return NextResponse.json({ error: 'Admin publishing is disabled in this testing preview. Make test changes on the staging Git branch.' }, { status: 403, headers });
  }
  const response = NextResponse.next();
  response.headers.set('X-Robots-Tag', headers['X-Robots-Tag']);
  return response;
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
