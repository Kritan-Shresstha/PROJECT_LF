import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

const Button = ({ loading, children, className = "", ...props }: ButtonProps) => (
  <button
    {...props}
    disabled={loading || props.disabled}
    className={`bg-blue-600 text-white rounded px-4 py-2 disabled:opacity-60 ${className}`}
  >
    {loading ? "Loading..." : children}
  </button>
)

export default Button
