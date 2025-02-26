"use client";

import { AuthContext } from "@/context/auth";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [User, setUser] = useState<unknown>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = global?.localStorage?.getItem("COMX_AUTH");
    if (token) {
      setIsAuthenticated(true);
      const user = jwtDecode(token);
      setUser(user);
    }
  }, []);

  const signIn = (token: string) => {
    if (token) {
      const user = jwtDecode(token);
      setIsAuthenticated(true);
      setUser(user);
    }
  };

  const signOut = () => {
    localStorage.removeItem("COMX_AUTH");
    setIsAuthenticated(false);
    redirect("/welcome");
  };

  const useValidate = () => {
    useEffect(() => {
      const token = localStorage.getItem("COMX_AUTH");
      const isAuthenticated = !!token;
      if (!isAuthenticated) {
        redirect("/welcome");
      } else {
        redirect("/dashboard");
      }
    }, []);
  };

  return (
    <AuthContext.Provider
      value={{ User, signIn, signOut, isAuthenticated, useValidate }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
