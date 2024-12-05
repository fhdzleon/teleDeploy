import { create } from "zustand";

export interface UserPayload {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  healthcareSystem: string;
  idAfiliado: string;
}

export interface UserState {
  user: UserPayload | null;
  setUser: (user: UserPayload | null) => void;
  sessionStatusStorage: boolean;
  setSessionStatusStorage: (status: boolean) => void;
  selectedValue: string; // Valor del select de especialidades
  setSelectedValue: (value: string) => void;
  selectedValueDoctor: string;
  setSelectedValueDoctor: (value: string) => void;
  selectedValueDate: string;
  setSelectedValueDate: (value: string) => void;
  selectedValueTime: string;
  setSelectedValueTime: (value: string) => void;
}

const useGlobalStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  sessionStatusStorage: true,
  setSessionStatusStorage: (status) => set({ sessionStatusStorage: status }),
  selectedValue: "", //Select de especialidad
  setSelectedValue: (value) => set({ selectedValue: value }),
  selectedValueDoctor: "",
  setSelectedValueDoctor: (value) => set({ selectedValueDoctor: value }),
  selectedValueDate: "",
  setSelectedValueDate: (value) => set({ selectedValueDate: value }),
  selectedValueTime: "",
  setSelectedValueTime: (value) => set({ selectedValueTime: value }),
}));

export default useGlobalStore;
