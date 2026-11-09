import { forwardRef } from "react"
import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition
          placeholder:text-gray-400 focus:ring-2
          ${
            error
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
          } ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
    </div>
  )
)

export default Input