import { NextRequest, NextResponse } from 'next/server'
import { verifyRefreshToken, signAccessToken, signRefreshToken } from '@/lib/jwt'

export async function POST(req: NextRequest) {
  try {
    const refreshToken = req.cookies.get('refreshToken')?.value

    if (!refreshToken) {
      return NextResponse.json({ message: 'توکن یافت نشد' }, { status: 401 })
    }

    const payload = verifyRefreshToken(refreshToken)

    const newPayload = { userId: payload.userId, phone: payload.phone, role: payload.role }
    const newAccessToken = signAccessToken(newPayload)
    const newRefreshToken = signRefreshToken(newPayload)

    const response = NextResponse.json({ accessToken: newAccessToken })

    response.cookies.set('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    })

    response.cookies.set('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 15 * 60,
    })

    return response
  } catch {
    return NextResponse.json({ message: 'توکن نامعتبر یا منقضی شده است' }, { status: 401 })
  }
}
