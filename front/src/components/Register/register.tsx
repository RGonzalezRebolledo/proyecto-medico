'use client'

import '@/app/globals.css'
import { validateFields } from '@/helpers/ValidateRegister';
import { register } from '@/helpers/register.helper';
import { IRegisterError, IRegisterProps } from '@/interfaces/TypesRegister';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

// const userDataH = {
//   name: "Ramon",
//   age: 32,
//   nationality: "venezolano",               // Cambiado a "age"
//   dni: 1234,
//   sex: "masculino",
//   // address: "Calle Falsa 123",
//   email: "ramongonzal453625645@gmail.com",
//   password: "Aa123456+*",
//   direction: "Calle Falsa 123" // Agregado el campo "direction"
// };

const Register = () => {

  const router = useRouter();

  const initialState = {
    name: '',
    age: '',
    dni: '',
    nationality: '',
    sex: '',
    email: '',
    password: '',
    direction: ''
    // phone: ''
  };

  const [userData, setUserData] = useState<IRegisterProps>(
     initialState
   );

   const [errors, setErrors] = useState<IRegisterError>(
     initialState
 );

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;

  // Convierte el valor a número si el campo es 'age' o 'dni'
  const newValue = (name === 'age' || name === 'dni') ? Number(value) : value;

  setUserData({
    ...userData,
    [name]: newValue
  });
}

    // ENVIO LOS DATOS AL BACK
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    
      // if (Object.keys(errors).length > 0) {
      //   console.log(errors);
      //   alert('Hay un error');
      // } else {
        try {
          const response = await register(userData);
          if (response.success) {
            alert('Registro exitoso');
            router.push('/login');
          } else {
            alert(`Error: ${response.message}`);
          }
        } catch (error: any) {
          alert(`Error: ${error.message || 'Error desconocido'}`);
        }
      // }
    };




        // VERIFICO SI EXISTE ALGUN ERROR EN LA VALIDACION DE LOS INPUTS
  // useEffect (() =>{
  //   const errors = validateFields (userData)
  //   setErrors (errors)
  //   }, [userData])


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
                  name="age"
                  type="number"
                   value={userData.age}
                   onChange={handleChange}

                  placeholder="Edad"
                  required
                />
          </div>
                    <div>
                    <input   
                    type='text'  
                    name='sex'             
                     value={userData.sex}
                    placeholder="Sexo"
                   onChange={handleChange}
            />
          </div>
          <div>
                <input
                  id="dni"
                  name="dni"
                  type="number"

                  placeholder="Dni"
                   value={userData.dni}
                   onChange={handleChange}
                  required
                />
          </div>
          <div>
                <input
                  id="nacionalidad"
                  name="nationality"
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
                  name="direction"
                  type="text"

                  placeholder="Direccion"
                   value={userData.direction}
                   onChange={handleChange}
                  required
                />
          </div>

          <div>
                <input
                  id="mail"
                  name="email"
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
