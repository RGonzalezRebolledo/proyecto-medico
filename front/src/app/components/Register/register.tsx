

import React from 'react'

const register = () => {

  return (
    <>
      <form  className="grid grid-cols-12 gap-4">
  
          {/* Título del formulario */}
          <div className="grid grid-cols-12">
            <div className="col-start-5 col-end-9 mt-[2.5em] my-[2em] text-center text-xl">
              FORMULARIO DE REGISTRO
            </div>
          </div>

          <div className="flex">
            {/* Columna izquierda */}
            <div className="flex flex-col ml-[3em] pr-[4em] w-1/2">
              {/* Campo nombre */}
              <div className="flex flex-col">
                <input
                  id="name"
                  name="name"
                  type="text"

                  placeholder="Nombre"
                  required
                />
              <div className="flex flex-col mt-4">
                <input
                  id="dni"
                  name="dni"
                  type="text"
     
                  placeholder="DNI"
                />
              <div className="flex flex-col mt-4">
                <input
                  name="address"

                  placeholder="Dirección"
                />
                {/* {errors.address && <span className="text-red-500 text-sm">{errors.address || 'Este campo es obligatorio'}</span>} */}
              </div>

              {/* Campo Correo Electrónico */}
              <div className="flex flex-col mt-4">
                <input
                  id="email-address"
                  name="email"
                  type="email"

                  placeholder="Correo Electrónico"
                  required
                />
                {/* {errors.email && <span className="text-red-500 text-sm">{errors.email || 'Este campo es obligatorio'}</span>} */}
              </div>
            </div>

            {/* Columna derecha */}
            <div className="flex flex-col ml-[3em] pr-[4em] w-1/2">
              {/* Campo País */}
              <div className="flex flex-col">
              <select
                name="country"
                // onChange={handleCountryChange}
                className="-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none 
        border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-black focus:border-primaryColor 
        dark:focus:border-primaryColor focus-visible:shadow-none"
                required
                data-tooltip-id="country-tooltip"
                data-tooltip-content="Selecciona tu país de residencia"
              >
                <option value="">Selecciona un país</option>
                {/* {countries.map(country => (
                  <option key={country.id} value={country.id}>{country.name}</option>
                ))} */}
              </select>
                {/* {errors.country && <span className="text-red-500 text-sm">{errors.country || 'Este campo es obligatorio'}</span>} */}
              </div>

              {/* Campo Ciudad */}
              <div className="flex flex-col mt-4">
              <select
                name="city"
                // value={dataUser.city}
                // onChange={handleChange}
                className="-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none 
        border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-black focus:border-primaryColor 
        dark:focus:border-primaryColor focus-visible:shadow-none"
                required
                data-tooltip-id="city-tooltip"
                data-tooltip-content="Selecciona tu ciudad"
              >
                <option value="">Selecciona una ciudad</option>
                {/* {cities.map(city => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))} */}
              </select>
                {/* {errors.city && <span className="text-red-500 text-sm">{errors.city || 'Este campo es obligatorio'}</span>} */}
              </div>

              {/* Selector de Grupos */}
              <div className="flex flex-col mb-4">
                <select
                
                />
              </div>

              {/* Botón de Enviar */}
              <button>
                boton
              </button>


              {/* Imagen de registro */}
              <img
                src="/images/registerImage.png"
                alt="Small icon"
                className="w-52 mx-auto my-4"
              />
            </div>
          </div>
        </div>
        </div>
      </form>
      </>
  )
    };
 
    export default register
