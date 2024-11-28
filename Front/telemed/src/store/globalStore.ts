import { create } from "zustand";

export interface UserPayload {
  name: string;
  lastName: string;
  email: string;
}

export interface UserState {
  user: UserPayload | null;
  setUser: (user: UserPayload | null) => void;
  sessionStatusStorage: boolean;
  setSessionStatusStorage: (status: boolean) => void;
  selectedValue: string; // Valor del select
  setSelectedValue: (value: string) => void; // Función para actualizar el valor
  
}



const useGlobalStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  sessionStatusStorage: true,
  setSessionStatusStorage: (status) => set({ sessionStatusStorage: status }),
  selectedValue: '',
  setSelectedValue: (value) => set({ selectedValue: value }),
}));



export default useGlobalStore;
