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
  estilos: string;
}

export interface registerInputs {
  name: string;
  lastName: string;
  gender: string;
  phone: string;
  email: string;
  password: string;
  healthcareSystem: string;
  idAfiliado: string;
  role: string;
  age: string;
}

export interface TurnoDisponible {
  fecha: string; // ISO Date String
  hora: string; // Time in HH:mm format
  disponible: boolean;
}

export interface Medico {
  medico: string;
  especialidad: string;
  imagenPerfilUrl: string;
  turnosDisponibles: TurnoDisponible[];
}

export type registerErrors = Partial<registerInputs>;

export interface Appointments {
  fecha: string;
  hora: string;
  doctor: string;
  especialidad: string;
}
