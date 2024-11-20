
export interface IRegisterProps {
    name: string
    dni: string
    nationality:string
    sex: string
    email: string
    password: string
    direction: string
    age: string

  }

  export interface IRegisterError {
    name?: string;
    dni?: string; // Mantener como number
    nationality?: string;
    sex?: string;
    email?: string;
    password?: string;
    direction?: string;
    age?: string; // Mantener como number
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