import { useMutation } from "@tanstack/react-query"
import api from "../../helper/axios"
import type { LoginPayLoad, LoginResponse } from "../../types/auth"

export const useLogin = () =>
  useMutation({
    mutationFn: async (data: LoginPayLoad) => {
      const res = await api.post<LoginResponse>("/auth/login", data)
      return res.data
    },
  })
