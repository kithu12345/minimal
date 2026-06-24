'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'

interface ForgotPasswordFormProps {
  onBack: () => void
}

export default function ForgotPasswordForm({ onBack }: ForgotPasswordFormProps) {
  const [resetEmail, setResetEmail] = useState('')
  const [resetEmailError, setResetEmailError] = useState('')
  const [resetEmailSent, setResetEmailSent] = useState(false)
  const [formError, setFormError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const validateResetEmail = (val: string) => {
    if (!val) {
      setResetEmailError('Email address is required')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      setResetEmailError('Please enter a valid email address')
      return false
    }
    setResetEmailError('')
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError('')

    const isEmailValid = validateResetEmail(resetEmail)
    if (!isEmailValid) return

    setIsLoading(true)

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: resetEmail }),
      })

      const data = await res.json()

      if (!res.ok) {
        setFormError(data.error || 'Something went wrong')
        setIsLoading(false)
        return
      }

      setIsLoading(false)
      setResetEmailSent(true)

      setTimeout(() => {
        onBack()
        setResetEmailSent(false)
        setResetEmail('')
      }, 4000)
    } catch (err) {
      console.error('Forgot password error:', err)
      setFormError('Network error. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <motion.form
      key="forgot-password-form"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {formError && (
        <div className="p-3 text-xs bg-rose-50 border border-rose-100 text-rose-600 rounded-xl font-semibold text-center">
          {formError}
        </div>
      )}
      {/* EMAIL INPUT */}
      <div className="relative">
        <input
          type="email"
          id="resetEmail"
          value={resetEmail}
          onChange={(e) => {
            setResetEmail(e.target.value)
            if (resetEmailError) setResetEmailError('')
          }}
          className="w-full bg-transparent border-b border-gray-300 py-3.5 px-1 text-sm outline-none focus:border-brand-teal focus:ring-0 transition-colors peer placeholder-transparent text-[#1a1a1a]"
          placeholder="Email Address"
          disabled={resetEmailSent}
        />
        <label
          htmlFor="resetEmail"
          className="absolute left-1 top-3.5 text-xs text-[#4e8b97] tracking-wider pointer-events-none transition-all duration-300 
            peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#4e8b97] 
            peer-focus:top-[-10px] peer-focus:text-[10px] peer-focus:text-brand-teal 
            peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#4e8b97]"
        >
          Email Address
        </label>
        {resetEmailError && (
          <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-semibold tracking-wide">
            <span className="material-symbols-outlined text-[14px]">error</span> {resetEmailError}
          </p>
        )}
      </div>

      {/* SUCCESS MESSAGE */}
      {resetEmailSent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center"
        >
          <div className="size-5 text-emerald-500 mx-auto mb-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-xs text-emerald-700 font-medium">
            Password reset link sent!<br />
            Redirecting to sign in...
          </p>
        </motion.div>
      )}

      {/* SEND RESET LINK BUTTON */}
      <button
        type="submit"
        disabled={isLoading || resetEmailSent}
        className="w-full py-4 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl text-xs font-bold uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-6"
      >
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            Send Reset Link
            <ArrowRight size={14} />
          </>
        )}
      </button>

      {/* FOOTER */}
      <div className="pt-4 border-t border-[#e7f1f3] text-center space-y-3">
        <p className="text-xs text-brand-teal tracking-wide">
          Remember your password?{' '}
          <button
            type="button"
            onClick={onBack}
            className="text-brand-teal hover:underline font-bold uppercase text-[10px] tracking-widest cursor-pointer ml-1"
          >
            Back to Sign In
          </button>
        </p>
      </div>
    </motion.form>
  )
}