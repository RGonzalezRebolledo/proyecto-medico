
export interface IRegisterProps {
    name: string
    dni: number
    nationality:string
    sex: string
    email: string
    password: string
    direction: string
    age: number

  }

  export interface IRegisterError {
    name?: string;
    dni?: number; // Mantener como number
    nationality?: string;
    sex?: string;
    email?: string;
    password?: string;
    direction?: string;
    age?: number; // Mantener como number
    messages?: {
        name?: string;
        dni?: string; // Mensaje de error
        nationality?: string;
        sex?: string;
        email?: string;
        password?: string;
        direction?: string;
        age?: string; // Mensaje de error
    };
}