'use client'

import '@/app/globals.css'
import { validateFields } from '@/helpers/ValidateRegister';
import { register } from '@/helpers/register.helper';
import { IRegisterError, IRegisterProps } from '@/interfaces/TypesRegister';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Register = () => {

  const router = useRouter();

  const initialState = {
    name: '',
    edad: '',
    maritalstatus: '',
    dni: '',
    nationality: '',
    sex: '',
    email: '',
    password: '',
    address: '',
    // phone: ''
  };

  const [userData, setUserData] = useState<IRegisterProps>(
    initialState
  );

  const [errors, setErrors] = useState<IRegisterError>(
    initialState
  );

    // CAPTURO LA INFORMACION DE LOS INPUTS
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const {name, value} = event.target;
  setUserData ({
    ...userData, [name]:value
  })
  }

    // ENVIO LOS DATOS AL BACK
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault ();
      
      if (Object.keys(errors).length > 0) { 
        console.log (errors)
      alert ('There is an error')
      } else {
    
        await register (userData)
        alert ('registration successful')
        router.push ("/login")
      }
      }

        // VERIFICO SI EXISTE ALGUN ERROR EN LA VALIDACION DE LOS INPUTS
  useEffect (() =>{
    const errors = validateFields (userData)
    setErrors (errors)
    }, [userData])


  return (
<>
  <div className='divprincipal'>
  
  <div className='divregister'>
  TU VIDA Y SALUD
  </div>
  
      <form onSubmit={handleSubmit}>

        <h1 style={{ color: 'black' }}>
            REGISTRO
        </h1>

          <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={userData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                />
          </div>
          <div>
                <input
                  id="edad"
                  name="edad"
                  type="text"
                  value={userData.edad}
                  onChange={handleChange}

                  placeholder="Edad"
                  required
                />
          </div>
                    <div>
                    <input                  
                    value={userData.sex}
                    placeholder="Sexo"
                  onChange={handleChange}
            />
          </div>
          <div>
                <input
                  id="dni"
                  name="dni"
                  type="text"

                  placeholder="Dni"
                  value={userData.dni}
                  onChange={handleChange}
                  required
                />
          </div>
          <div>
                <input
                  id="nacionalidad"
                  name="nacionalidad"
                  type="text"

                  placeholder="Nacionalidad"
                  value={userData.nationality}
                  onChange={handleChange}
                  required
                />
          </div>

          <div>
                <input
                  id="direccion"
                  name="direccion"
                  type="text"

                  placeholder="Direccion"
                  value={userData.address}
                  onChange={handleChange}
                  required
                />
          </div>

          <div>
                <input
                  id="mail"
                  name="mail"
                  type="text"

                  placeholder="Mail"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
          </div>
          <div>
                <input
                  id="password"
                  name="password"
                  type="text"

                  placeholder="password"
                  value={userData.password}
                  onChange={handleChange}
                  required
                />
          </div>

          <div>
          <button className='boton'>
            Registrar
          </button>
          </div>
      
      </form>
      </div>

      </>
  )
    };
 
    export default Register
