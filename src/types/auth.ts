import type { IUser } from './user'

export interface LoginPayLoad {
    email: string
    password: string
}

export interface RegisterPayLoad {
    name: string
    email:string
    password: string
}

export interface LoginResponse {
    accessToken: string 
    refreshToken: string
    user: IUser
}

export interface RegisterResponse {
    user: IUser
}
