"use client";

import { createContext, useContext } from "react";

type AuthProps = {
  User: unknown;
  signIn: (token: string) => void;
  signOut: () => void;
  isAuthenticated: boolean;
  useValidate: () => void;
};

export const AuthContext = createContext<AuthProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "AuthProvider is missing. Ensure your root layout or App component is wrapped with <Provider>."
    );
  }
  return context;
};
