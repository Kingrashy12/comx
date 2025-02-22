"use client";

import { useHomeRedirect } from "@/hooks/redirect";

export default function Home() {
  useHomeRedirect();
  return null;
}
