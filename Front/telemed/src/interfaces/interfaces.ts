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