
export interface IRegisterProps {
    name: string;
    maritalstatus: string
    dni: string
    nationality:string
    sex: string
    email: string;
    password: string;
    address: string;
    // phone: string;
    edad: string

  }

  export interface IRegisterError {
    name?: string;
    maritalstatus?: string
    dni?: string
    nationality?:string
    sex?: string
    email?: string;
    password?: string;
    address?: string;
    // phone?: string;
  }