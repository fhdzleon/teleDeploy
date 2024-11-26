import { create } from "zustand";

export interface UserPayload {
  name: string;
  lastName: string;
  email: string;
}

export interface UserState {
  user: UserPayload | null;
  setUser: (user: UserPayload | null) => void;
}

const useGlobalStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useGlobalStore;
