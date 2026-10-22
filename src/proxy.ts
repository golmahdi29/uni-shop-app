import { NextRequest, NextResponse } from 'next/server'
import { verifyAccessToken } from '@/lib/jwt'
import type { TokenPayload } from '@/lib/jwt'

const roleRoutes: Record<string, string> = {
  admin: '/admin',
  user: '/user',
  seller: '/seller',
}

const publicRoutes = ['/login', '/api']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next()
  }

  const targetRole = Object.entries(roleRoutes).find(([, route]) =>
    pathname.startsWith(route)
  )?.[0]

  if (!targetRole) {
    return NextResponse.next()
  }

  const accessToken = request.cookies.get('accessToken')?.value

  if (!accessToken) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  try {
    const payload: TokenPayload = verifyAccessToken(accessToken)

    if (payload.role !== targetRole) {
      const correctRoute = roleRoutes[payload.role]
      if (correctRoute) {
        return NextResponse.redirect(new URL(correctRoute, request.url))
      }
      return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
  } catch {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*', '/seller/:path*'],
}
