import { IRegisterProps } from "@/interfaces/TypesRegister";


const APIURL = process.env.NEXT_PUBLIC_API_URL

// FUNCION QUE REGISTRA LOS DATOS DE LOS USUARIOS

export async function register(userData : IRegisterProps) {

  console.log (userData);
    try {
      const ResRegister = await fetch (`${APIURL}/auth/signup`, {
        // cache: 'no-cache'
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify (userData)    
    })

    if (ResRegister.ok) {
        return ResRegister.json()
    }

   } catch (error: any) {
    throw new Error (error)   
    }
  };

