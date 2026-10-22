import Joi from 'joi'

const phonePattern = /^09\d{9}$/

export const sendOtpSchema = Joi.object({
  phone: Joi.string().pattern(phonePattern).required().messages({
    'string.pattern.base': 'شماره موبایل باید با 09 شروع شود و 11 رقم باشد',
    'any.required': 'شماره موبایل الزامی است',
    'string.empty': 'شماره موبایل نمی‌تواند خالی باشد',
  }),
})

export const verifyOtpSchema = Joi.object({
  phone: Joi.string().pattern(phonePattern).required().messages({
    'string.pattern.base': 'شماره موبایل باید با 09 شروع شود و 11 رقم باشد',
    'any.required': 'شماره موبایل الزامی است',
  }),
  code: Joi.string().length(6).pattern(/^\d{6}$/).required().messages({
    'string.length': 'کد تایید باید ۶ رقم باشد',
    'string.pattern.base': 'کد تایید باید فقط شامل اعداد باشد',
    'any.required': 'کد تایید الزامی است',
  }),
})

export const loginSchema = Joi.object({
  phone: Joi.string().pattern(phonePattern).required().messages({
    'string.pattern.base': 'شماره موبایل باید با 09 شروع شود و 11 رقم باشد',
    'any.required': 'شماره موبایل الزامی است',
  }),
  password: Joi.string().min(4).max(128).required().messages({
    'string.min': 'رمز عبور باید حداقل ۴ کاراکتر باشد',
    'string.max': 'رمز عبور حداکثر ۱۲۸ کاراکتر می‌تواند باشد',
    'any.required': 'رمز عبور الزامی است',
    'string.empty': 'رمز عبور نمی‌تواند خالی باشد',
  }),
})

export function formatJoiError(error: Joi.ValidationError): string {
  return error.details[0]?.message || 'خطای اعتبارسنجی'
}
