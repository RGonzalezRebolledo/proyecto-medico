
export interface IRegisterProps {
    name: string
    dni: number
    nationality:string
    sex?: string
    email: string
    password: string
    address: string
    // phone: string;
    edad: number

  }

  export interface IRegisterError {
    name?: string
    dni?: number
    nationality?:string
    sex?: string
    email?: string
    password?: string
    address?: string
    // phone?: string;
    edad?: number
  }