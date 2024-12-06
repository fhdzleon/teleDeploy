import { registerErrors, registerInputs } from "@/interfaces/interfaces";

export const validateEditionInputs = (input: registerInputs) => {
  const errors: registerErrors = {};

  if (!input.name) {
    errors.name = "El nombre es requerido";
  }

  if (!input.lastName) {
    errors.lastName = "El apellido es requerido";
  }

  if (!input.gender) {
    errors.gender = "Este campo es requerido";
  }

  if (!input.phone) {
    errors.phone = "El teléfono es requerido";
  } else if (!/^\d{10}$/.test(input.phone)) {
    errors.phone = "El teléfono debe ser un número de 10 dígitos";
  }

  if (!input.age) {
    errors.age = "La edad es requerida";
  } else if (!/^\d+$/.test(input.age)) {
    errors.age = "La edad debe ser un número válido";
  } else if (Number(input.age) < 18) {
    errors.age = "Debes ser mayor de edad para ingresar a la aplicación";
  } else if (Number(input.age) > 99) {
    errors.age = "La edad no puede ser mayor de 99 años";
  }

  if (!input.healthcareSystem) {
    errors.healthcareSystem = "Debes elegir tu obra social";
  }

  if (!input.idAfiliado) {
    errors.idAfiliado = "El número de afiliado es requerido";
  } else if (isNaN(Number(input.idAfiliado))) {
    errors.idAfiliado = "El número de afiliado debe ser numérico";
  }

  return errors;
};
