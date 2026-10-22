import mongoose, { Schema, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IAddress {
  province: string
  city: string
  address: string
  postalCode: string
  recipientName: string
  recipientPhone: string
  isDefault: boolean
}

export interface IUser extends Document {
  firstName?: string
  lastName?: string
  phone: string
  email?: string
  nationalCode?: string
  password: string
  role: 'user' | 'admin' | 'seller'
  avatar?: string
  gender?: 'male' | 'female'
  birthDate?: Date
  addresses: IAddress[]
  isPhoneVerified: boolean
  emailVerified: boolean
  lastLogin?: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

const addressSchema = new Schema<IAddress>({
  province: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  postalCode: { type: String, required: true },
  recipientName: { type: String, required: true },
  recipientPhone: { type: String, required: true },
  isDefault: { type: Boolean, default: false },
})

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    phone: { type: String, required: true, unique: true, trim: true },
    email: { type: String, unique: true, sparse: true, trim: true, lowercase: true },
    nationalCode: { type: String, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin', 'seller'], default: 'user' },
    avatar: { type: String },
    gender: { type: String, enum: ['male', 'female'] },
    birthDate: { type: Date },
    addresses: [addressSchema],
    isPhoneVerified: { type: Boolean, default: false },
    emailVerified: { type: Boolean, default: false },
    lastLogin: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return

  const salt = await bcrypt.genSalt(12)
  this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password)
}

userSchema.set('toJSON', {
  transform(_doc, ret) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transformed = ret as Record<string, any>
    delete transformed.password
    delete transformed.__v
    return transformed
  },
})

delete mongoose.models.User

const User = mongoose.model<IUser>('User', userSchema)

export default User
