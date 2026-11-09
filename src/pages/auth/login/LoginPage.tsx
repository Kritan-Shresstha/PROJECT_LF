import Input from "../../../components/forms/Input"
import Button from "../../../components/ui/Button"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "../../../schemas/auth"
import type { LoginFormData } from "../../../schemas/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLogin } from "../../../hook/api/useAuth"

const LoginPage = () => {
  const navigate = useNavigate()
  const { mutateAsync, isPending } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    await mutateAsync(data)
    navigate("/dashboard")
  }

   return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        <div className="relative hidden md:block">
          <img
            src={"https://picsum.photos/id/1015/1000/1300"}
            alt="login"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="mt-2 text-sm text-white/80">
              Sign in to continue to your account.
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-900">Login</h1>
          <p className="text-sm text-gray-500 mt-1 mb-8">
            Enter your email and password to continue.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Input
              error={errors?.email?.message}
              {...register("email")}
              type="email"
              label="Email"
              placeholder="you@example.com"
            />
            <Input
              error={errors?.password?.message}
              {...register("password")}
              type="password"
              label="Password"
              placeholder="••••••••"
            />

            <div className="text-right">
              <Link to="/" className="text-sm text-indigo-600 hover:underline">
                Forgot your password?
              </Link>
            </div>

            <Button loading={isPending} type="submit" className="w-full">
              Login
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-8 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-600 font-medium hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage