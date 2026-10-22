import { NextRequest, NextResponse } from 'next/server'
import { verifyAccessToken } from '@/lib/jwt'

export async function GET(req: NextRequest) {
  try {
    const accessToken = req.cookies.get('accessToken')?.value

    if (!accessToken) {
      return NextResponse.json({ user: null })
    }

    const payload = verifyAccessToken(accessToken)

    return NextResponse.json({
      user: {
        userId: payload.userId,
        phone: payload.phone,
        role: payload.role,
      },
    })
  } catch {
    return NextResponse.json({ user: null })
  }
}
