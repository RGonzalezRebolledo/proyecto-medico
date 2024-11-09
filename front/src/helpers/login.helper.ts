import { IloginProps } from "@/interfaces/TypesLogin"

const APIURL = process.env.NEXT_PUBLIC_API_URL

// FUNCION QUE OBTIENE TODOS LOS PRODUCTOS

export async function login(userData : IloginProps) {
    try {
      const ResLogin = await fetch (`${APIURL}/auth/signin`, {
        // cache: 'no-cache'
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify (userData)    
    })

    if (ResLogin.ok) {
        return ResLogin.json()
    } else {
      throw Error ("Failed to Login")
    }

   } catch (error: any) {
    throw new Error (error)   
    }
  };

