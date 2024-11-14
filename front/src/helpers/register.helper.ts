// import { IRegisterProps } from "@/interfaces/TypesRegister";


// const APIURL = process.env.NEXT_PUBLIC_API_URL

// // FUNCION QUE REGISTRA LOS DATOS DE LOS USUARIOS

// export async function register(userData: IRegisterProps) {
//   console.log(userData);
//   try {
//       const ResRegister = await fetch(`${APIURL}/auth/signup`, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(userData),
//       });

//       if (ResRegister.ok) {
//           return ResRegister.json();
//       } else {
//           const errorData = await ResRegister.json();
//           console.error('Error:', errorData);
//           throw new Error(`Error ${ResRegister.status}: ${errorData.message || 'Error desconocido'}`);
//       }
//   } catch (error: any) {
//       console.error('Catch error:', error);
//       throw new Error(error);
//   }
// };

import { IRegisterProps } from "@/interfaces/TypesRegister";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

// FUNCION QUE REGISTRA LOS DATOS DE LOS USUARIOS

export async function register(userData: IRegisterProps) {
    console.log(userData);
    try {
        const ResRegister = await fetch(`${APIURL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
  
        if (ResRegister.ok) {
            return ResRegister.json();
        } else {
            const errorData = await ResRegister.json();
            console.error('Error:', errorData);
            // Retorna el mensaje de error en lugar de lanzar una excepción
            return { success: false, message: errorData.message || 'Error desconocido' };
        }
    } catch (error: any) {
        console.error('Catch error:', error);
        // Retorna el mensaje de error en lugar de lanzar una excepción
        return { success: false, message: error.message || 'Error desconocido' };
    }
  };