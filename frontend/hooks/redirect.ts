"use client";

import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

export const useAuthRedirect = () => {
  useEffect(() => {
    const token = localStorage.getItem("COMX_AUTH");
    const isAuthenticated = !!token;
    if (!isAuthenticated) {
      return;
    } else {
      redirect("/dashboard");
    }
  }, []);
};

export const useHomeRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("COMX_AUTH");
    const isAuthenticated = !!token;
    if (!isAuthenticated) {
      router.push("/auth/sign-in");
      return;
    } else {
      router.push("/dashboard");
      return;
    }
  }, [router]);
};
