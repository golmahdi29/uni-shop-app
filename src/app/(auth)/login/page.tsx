"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { sendOtpSchema, verifyOtpSchema, loginSchema, formatJoiError } from "@/lib/validations"

type AuthMode = "otp" | "password"
type Step = "phone" | "otp"

export default function LoginPage() {
  const router = useRouter()
  const [mode, setMode] = useState<AuthMode>("otp")
  const [step, setStep] = useState<Step>("phone")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [otpCode, setOtpCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [error, setError] = useState("")
  const [pendingVerify, setPendingVerify] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSendCode = async () => {
    const { error: validationError } = sendOtpSchema.validate({ phone }, { abortEarly: true })
    if (validationError) {
      setFieldErrors({ phone: formatJoiError(validationError) })
      return
    }

    setLoading(true)
    setError("")
    setFieldErrors({})
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || "خطا در ارسال کد")
        return
      }
      setOtpCode(data.code)
      setStep("otp")
    } catch {
      setError("خطا در ارتباط با سرور")
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async () => {
    const code = otp.join("")
    const { error: validationError } = verifyOtpSchema.validate({ phone, code }, { abortEarly: true })
    if (validationError) {
      setError(formatJoiError(validationError))
      return
    }

    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, code }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || "خطا در تایید کد")
        return
      }
      redirectByRole(data.role)
    } catch {
      setError("خطا در ارتباط با سرور")
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordLogin = async () => {
    const { error: validationError } = loginSchema.validate({ phone, password }, { abortEarly: true })
    if (validationError) {
      const key = validationError.details[0].path[0] as string
      setFieldErrors({ [key]: formatJoiError(validationError) })
      return
    }

    setLoading(true)
    setError("")
    setFieldErrors({})
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || "خطا در ورود")
        return
      }

      if (data.isPhoneVerified === false) {
        setPendingVerify(true)
        const codeRes = await fetch("/api/auth/verify-phone", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone }),
        })
        const codeData = await codeRes.json()
        if (codeRes.ok) {
          setOtpCode(codeData.code)
        }
        setStep("otp")
        return
      }

      redirectByRole(data.role)
    } catch {
      setError("خطا در ارتباط با سرور")
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyPhone = async () => {
    const code = otp.join("")
    const { error: validationError } = verifyOtpSchema.validate({ phone, code }, { abortEarly: true })
    if (validationError) {
      setError(formatJoiError(validationError))
      return
    }

    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/auth/verify-phone", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, code }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || "خطا در تایید کد")
        return
      }
      redirectByRole("user")
    } catch {
      setError("خطا در ارتباط با سرور")
    } finally {
      setLoading(false)
    }
  }

  const redirectByRole = (role: string) => {
    switch (role) {
      case "admin":
        router.push("/admin")
        break
      case "seller":
        router.push("/seller")
        break
      default:
        router.push("/user")
    }
  }

  const handleBack = () => {
    if (pendingVerify) {
      setPendingVerify(false)
    }
    setStep("phone")
    setOtp(["", "", "", "", "", ""])
    setOtpCode("")
    setError("")
    setFieldErrors({})
  }

  const title = pendingVerify ? "تأیید شماره موبایل" : "کد تایید"

  return (
    <div className="w-full max-w-sm">
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        {step === "phone" ? (
          <>
            <div className="text-center mb-6">
              <h1 className="text-xl font-bold text-neutral-800 mb-1">ورود | ثبت‌نام</h1>
              <p className="text-sm text-neutral-500">برای ادامه شماره موبایل خود را وارد کنید</p>
            </div>

            <div className="flex mb-4 rounded-xl bg-neutral-100 p-1">
              <button
                className={`flex-1 py-2 text-sm font-medium rounded-xl transition-colors ${mode === "otp" ? "bg-white text-neutral-800 shadow-sm" : "text-neutral-500"}`}
                onClick={() => setMode("otp")}
              >
                ورود با کد
              </button>
              <button
                className={`flex-1 py-2 text-sm font-medium rounded-xl transition-colors ${mode === "password" ? "bg-white text-neutral-800 shadow-sm" : "text-neutral-500"}`}
                onClick={() => setMode("password")}
              >
                ورود با رمز
              </button>
            </div>

            <label className="block text-sm font-medium text-neutral-700 mb-1">شماره موبایل</label>
            <input
              type="tel"
              dir="ltr"
              placeholder="09123456789"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); setFieldErrors({}) }}
              className={`w-full border rounded-xl px-4 py-3 text-sm text-neutral-800 outline-0 focus:border-sky-600 transition-colors ${fieldErrors.phone ? "border-red-400" : "border-neutral-300"}`}
              maxLength={11}
            />
            {fieldErrors.phone && <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>}

            {mode === "password" && (
              <>
                <label className="block text-sm font-medium text-neutral-700 mt-4 mb-1">رمز عبور</label>
                <input
                  type="password"
                  dir="ltr"
                  placeholder="رمز عبور"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setFieldErrors({}) }}
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-neutral-800 outline-0 focus:border-sky-600 transition-colors ${fieldErrors.password ? "border-red-400" : "border-neutral-300"}`}
                />
                {fieldErrors.password && <p className="text-red-500 text-xs mt-1">{fieldErrors.password}</p>}
              </>
            )}

            {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}

            <button
              onClick={mode === "otp" ? handleSendCode : handlePasswordLogin}
              disabled={loading}
              className="w-full mt-4 bg-sky-600 hover:bg-sky-700 disabled:bg-neutral-300 text-white rounded-xl py-3 text-sm font-medium transition-colors"
            >
              {loading ? "لطفا صبر کنید..." : mode === "otp" ? "ارسال کد تایید" : "ورود"}
            </button>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <h1 className="text-xl font-bold text-neutral-800 mb-1">{title}</h1>
              <p className="text-sm text-neutral-500">
                کد تایید به شماره{" "}
                <span dir="ltr" className="font-medium text-neutral-700">{phone}</span> ارسال شد
              </p>
            </div>

            {otpCode && (
              <div className="text-center mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                <p className="text-xs text-yellow-700 mb-1">کد تایید (فقط برای توسعه)</p>
                <p className="text-2xl font-bold text-yellow-800 tracking-widest" dir="ltr">{otpCode}</p>
              </div>
            )}

            <div className="flex items-center justify-center gap-3 mb-4" dir="ltr">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  className="w-12 h-12 border border-neutral-300 rounded-xl text-center text-lg font-bold text-neutral-800 outline-0 focus:border-sky-600 transition-colors"
                />
              ))}
            </div>

            {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

            <button onClick={handleBack} className="w-full text-center text-xs text-sky-600 hover:text-sky-700 transition-colors mb-4">
              {pendingVerify ? "بازگشت" : "تغییر شماره موبایل"}
            </button>

            <button
              onClick={pendingVerify ? handleVerifyPhone : handleVerifyOtp}
              disabled={loading || otp.some((d) => !d)}
              className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-neutral-300 text-white rounded-xl py-3 text-sm font-medium transition-colors"
            >
              {loading ? "لطفا صبر کنید..." : "تایید"}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
