import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface UserPayload {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  healthcareSystem: string;
  idAfiliado: string;
  age: string;
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

const useGlobalStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      sessionStatusStorage: true,
      setSessionStatusStorage: (status) =>
        set({ sessionStatusStorage: status }),
      selectedValue: "",
      setSelectedValue: (value) => set({ selectedValue: value }),
      selectedValueDoctor: "",
      setSelectedValueDoctor: (value) => set({ selectedValueDoctor: value }),
      selectedValueDate: "",
      setSelectedValueDate: (value) => set({ selectedValueDate: value }),
      selectedValueTime: "",
      setSelectedValueTime: (value) => set({ selectedValueTime: value }),
    }),
    {
      name: "globalStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useGlobalStore;
