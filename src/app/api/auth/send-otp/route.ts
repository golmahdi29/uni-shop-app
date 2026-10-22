import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongoose'
import User from '@/models/user.model'
import { generateOtp } from '@/lib/otp'
import { sendOtpSchema, formatJoiError } from '@/lib/validations'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { error, value } = sendOtpSchema.validate(body)
    if (error) {
      return NextResponse.json({ message: formatJoiError(error) }, { status: 400 })
    }

    const { phone } = value
    const code = await generateOtp(phone)

    await dbConnect()
    const existingUser = await User.findOne({ phone })
    const role = existingUser?.role || 'user'

    return NextResponse.json({
      message: 'کد تایید ارسال شد',
      code,
      isNewUser: !existingUser,
      role,
    })
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : 'خطای سرور',
    }, { status: 500 })
  }
}
