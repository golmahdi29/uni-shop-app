import dbConnect from '@/lib/mongoose'
import Otp from '@/models/otp.model'

export async function generateOtp(phone: string): Promise<string> {
  await dbConnect()

  const code = String(Math.floor(100000 + Math.random() * 900000))
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000)

  await Otp.deleteMany({ phone })
  await Otp.create({ phone, code, expiresAt })

  return code
}

export async function verifyOtp(phone: string, code: string): Promise<boolean> {
  await dbConnect()

  const record = await Otp.findOne({ phone, code })

  if (!record) return false
  if (Date.now() > record.expiresAt.getTime()) {
    await Otp.deleteOne({ _id: record._id })
    return false
  }

  await Otp.deleteMany({ phone })
  return true
}
