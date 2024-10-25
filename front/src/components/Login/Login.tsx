// components/LoginForm.tsx
'use client'

import { login } from '@/helpers/login.helper';
import { validateFields } from '@/helpers/validateLogin';
import { IloginError, IloginProps } from '@/interfaces/TypesLogin';
import { IRegisterProps } from '@/interfaces/TypesRegister';
import { useRouter } from 'next/navigation';
import '@/app/globals.css'
// components/LoginForm.tsx
import React, { useEffect, useState } from 'react';


// Componente para el registro del usuario
const LoginForm = () => {
const router = useRouter();
const initialState = {
  email:"",
  password:""
}

const [dataUser, SetdataUser] = useState<IloginProps> (initialState);
const [errors, SetErrors] = useState<IloginError>(initialState);

// CAPTURO LA INFORMACION DE LOS INPUTS
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
const {name, value} = event.target;
SetdataUser ({
  ...dataUser, [name]:value
})
}



  // ENVIO LOS DATOS AL BACK
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault ();

if (Object.keys(errors).length > 0) { 
alert ('hay un error')
} else {
  const response = await login (dataUser);
  const {token, user} = response;
  const clearUser = {
    id: user.id,
    name: user.name,
    address: user.address,
    phone: user.phone,
    email: user.email,
    orders: user.orders
  }
  // AQUI ES DONDE GUARDO LOS NUEVOS DATOS DEL USUARIO EN EL NAVEGADOR PARA QUE SEA PERSISTENTE
  localStorage.setItem ('userSesion', JSON.stringify ({token: token, userData:clearUser}))
  router.push ('/');
}
}

// VERIFICO SI EXISTE ALGUN ERROR EN LA VALIDACION DE LOS INPUTS
useEffect (() =>{
  const errors = validateFields (dataUser)
  SetErrors (errors)
  }, [dataUser])

  return (
   
    <div className='divprincipal'>
    
    <div className='divregister'>
    INGRESAR
    </div>

    <form onSubmit={handleSubmit}>
              <h1>Ingresar</h1>
       
        <div>
        <input
          type="text"
          name='email'
          value={dataUser.email}
          onChange={handleChange}
          placeholder="email"
        />
        </div>
        
        <div>
        <input
          type="password"
          name='password'
          value={dataUser.password}
          onChange={handleChange}
          placeholder="Password"
        />
        </div>

      <div>
      <button
        type="submit" className='boton'
        disabled={errors.email ? false : true && errors.password ? false : true}
      >
        Ingresar
      </button>
      </div>

    </form>
    </div>

  )
};

export default LoginForm;