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
  
}

const useGlobalStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  sessionStatusStorage: true,
  setSessionStatusStorage: (status) => set({ sessionStatusStorage: status }),
}));



export default useGlobalStore;
