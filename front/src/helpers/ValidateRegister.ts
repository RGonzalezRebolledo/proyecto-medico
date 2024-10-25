import { IRegisterError, IRegisterProps } from "@/interfaces/TypesRegister";

export const validateFields = (values: IRegisterProps): IRegisterError => {

        const errors: IRegisterError = {

        };

        if (!values.name) {
          errors.name = 'El nombre es requerido';
        }

        if (!values.maritalstatus) {
          errors.maritalstatus = 'El Estado civil es requerido';
        }

        if (!values.dni) {
          errors.dni = 'El Dni es requerido';
        }

        if (!values.nationality) {
          errors.nationality = 'La nacionalidad es requerido';
        }

     if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){ 
      errors.email = 'El correo electrónico no es válido';
    }


    if (values.password && values.password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    if (!values.address) {
      errors.address = 'La dirección es requerida';
    }
  
    // if (!values.phone) {
    //   errors.phone = 'El teléfono es requerido';
    // }

    return errors;
  };