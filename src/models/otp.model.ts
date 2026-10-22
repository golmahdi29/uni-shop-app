import mongoose, { Schema, Document } from 'mongoose'

export interface IOtp extends Document {
  phone: string
  code: string
  expiresAt: Date
  createdAt: Date
}

const otpSchema = new Schema<IOtp>({
  phone: { type: String, required: true, index: true },
  code: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
})

otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

delete mongoose.models.Otp

const Otp = mongoose.model<IOtp>('Otp', otpSchema)

export default Otp
