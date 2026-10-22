import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongoose'
import User from '@/models/user.model'
import { signAccessToken, signRefreshToken } from '@/lib/jwt'
import { loginSchema, formatJoiError } from '@/lib/validations'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { error, value } = loginSchema.validate(body)
    if (error) {
      return NextResponse.json({ message: formatJoiError(error) }, { status: 400 })
    }

    const { phone, password } = value

    await dbConnect()

    let user = await User.findOne({ phone })

    if (!user) {
      const userCount = await User.countDocuments()
      user = await User.create({
        phone,
        password,
        role: userCount === 0 ? 'admin' : 'user',
        isPhoneVerified: false,
      })
    } else {
      const isMatch = await user.comparePassword(password)
      if (!isMatch) {
        return NextResponse.json({ message: 'رمز عبور اشتباه است' }, { status: 401 })
      }
    }

    const payload = { userId: user._id.toString(), phone: user.phone, role: user.role as 'user' | 'admin' | 'seller' }
    const accessToken = signAccessToken(payload)
    const refreshToken = signRefreshToken(payload)

    const response = NextResponse.json({
      message: 'ورود موفق',
      accessToken,
      role: user.role,
      isPhoneVerified: user.isPhoneVerified,
    })

    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    })

    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 15 * 60,
    })

    return response
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : 'خطای سرور',
    }, { status: 500 })
  }
}
