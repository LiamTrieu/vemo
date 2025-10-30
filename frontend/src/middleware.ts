// middleware.ts (ở root project)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const theme = req.cookies.get('theme')?.value || 'light';
  const res = NextResponse.next();
  res.headers.set('x-theme', theme);
  return res;
}
