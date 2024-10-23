

import React from 'react'
import '@/app/globals.css'

const register = () => {

  return (
<>

 

  <div className='divprincipal'>
  <div className='divregister'>
  TU VIDA Y SALUD
  </div>
      <form>
                      {/* Título del formulario */}
        <h1 style={{ color: 'black' }}>
            REGISTRO
        </h1>
          <div>
                <input
                  id="name"
                  name="name"
                  type="text"

                  placeholder="Nombre"
                  required
                />
          </div>
          <div>
                <input
                  id="edad"
                  name="edad"
                  type="text"

                  placeholder="Edad"
                  required
                />
          </div>
                    <div>
                    <select>
            <option value="opcion1">Masculino</option>
            <option value="opcion2">Femenino</option>
            
        </select>
          </div>
          <div>
                <input
                  id="dni"
                  name="dni"
                  type="text"

                  placeholder="Dni"
                  required
                />
          </div>
          <div>
                <input
                  id="nacionalidad"
                  name="nacionalidad"
                  type="text"

                  placeholder="Nacionalidad"
                  required
                />
          </div>

          <div>
                <input
                  id="direccion"
                  name="direccion"
                  type="text"

                  placeholder="Direccion"
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
 
    export default register
