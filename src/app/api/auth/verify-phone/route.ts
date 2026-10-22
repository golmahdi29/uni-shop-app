import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongoose'
import User from '@/models/user.model'
import { generateOtp, verifyOtp } from '@/lib/otp'
import { verifyAccessToken } from '@/lib/jwt'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { phone } = body

    if (!phone) {
      return NextResponse.json({ message: 'شماره موبایل الزامی است' }, { status: 400 })
    }

    const code = await generateOtp(phone)

    return NextResponse.json({
      message: 'کد تایید ارسال شد',
      code,
    })
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : 'خطای سرور',
    }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const { phone, code } = body

    if (!phone || !code) {
      return NextResponse.json({ message: 'شماره موبایل و کد تایید الزامی است' }, { status: 400 })
    }

    const isValid = await verifyOtp(phone, code)
    if (!isValid) {
      return NextResponse.json({ message: 'کد تایید نامعتبر یا منقضی شده است' }, { status: 400 })
    }

    const accessToken = req.cookies.get('accessToken')?.value
    if (!accessToken) {
      return NextResponse.json({ message: 'لطفاً ابتدا وارد شوید' }, { status: 401 })
    }

    const payload = verifyAccessToken(accessToken)

    if (payload.phone !== phone) {
      return NextResponse.json({ message: 'شماره موبایل با حساب کاربری مطابقت ندارد' }, { status: 403 })
    }

    await dbConnect()

    await User.updateOne({ phone }, { isPhoneVerified: true })

    return NextResponse.json({ message: 'شماره موبایل تأیید شد', isPhoneVerified: true })
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : 'خطای سرور',
    }, { status: 500 })
  }
}
