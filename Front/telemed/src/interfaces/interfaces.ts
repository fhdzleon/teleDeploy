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

export interface TurnoDisponible {
  fecha: string; // ISO Date String
  hora: string;  // Time in HH:mm format
  disponible: boolean;
}

export interface Medico {
  medico: string;
  speciality: string;
  turnosDisponibles: TurnoDisponible[];
}

