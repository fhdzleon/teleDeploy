// Aqui iran las validaciones del register por pasos
import { registerErrors, registerInputs } from "@/interfaces/interfaces";

export const validateRegisterStep1 = (input: registerInputs) => {
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

  return errors;
};

export const validateRegisterStep2 = (input: registerInputs) => {
  const errors: registerErrors = {};

  if (!input.healthcareSystem) {
    errors.healthcareSystem = "Debes elegir tu obra social";
  }

  if (!input.idSocialWork) {
    errors.idSocialWork = "El número de afiliado es requerido";
  } else if (isNaN(Number(input.idSocialWork))) {
    errors.idSocialWork = "El número de afiliado debe ser numérico";
  }

  return errors;
};

export const validateRegisterStep3 = (input: registerInputs) => {
  const errors: registerErrors = {};

  if (!input.email) {
    errors.email = "El email es requerido";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = "El email no es válido";
  }

  if (!input.password) {
    errors.password = "La contraseña es requerida";
  } else if (input.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  }

  return errors;
};
