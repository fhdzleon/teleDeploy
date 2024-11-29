export interface Credential {
  email: string;
  password: string;
}

export type CredentialErrors = Partial<Credential>;

export interface ModalTurnosProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface buttonInformationProps {
  text: string;
}

export interface registerInputs {
  name: string;
  lastName: string;
  gender: string;
  phone: string;
  email: string;
  password: string;
  socialWork: string;
  idSocialWork: string;
  role: string;
}

export type registerErrors = Partial<registerInputs>;
