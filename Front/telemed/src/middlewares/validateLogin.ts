import { Credential, CredentialErrors } from "@/interfaces/interfaces";

export const validateLogin = (input: Credential) => {
  const errors: CredentialErrors = {};

  //email -->

  if (!input.email) {
    errors.email = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "El email es inválido";
  }

  // password -->

  if (!input.password) {
    errors.password = "Debes tener un password";
  }

  return errors;
};
