import { create } from "zustand";
export const Store: any = create((set: any) => ({
  token: "",
  setToken: (data: string) =>
    set({
      token: data,
    }),
}));
