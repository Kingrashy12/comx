"use client";

import React, { useState } from "react";
import { AuthCard } from "../cards";
import FormWithLabel from "../ui/form-with-label";
import { Box, Button } from "../ui";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Link from "next/link";
import { login } from "@/helper/api";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useAuthRedirect } from "@/hooks/redirect";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { signIn } = useAuth();
  const router = useRouter();
  useAuthRedirect();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submit = async () => {
    const res = await login({
      email: form.email,
      password: form.password,
    });
    if (res.token) {
      signIn(res.token);
      router.push("/dashboard");
    }
  };

  return (
    <AuthCard
      header="Sign in to ComX"
      className="gap-3"
      subHeader="Enter your login credentials below."
    >
      <FormWithLabel
        label="Your Email"
        value={form.email}
        name="email"
        onChange={handleForm}
        placeholder="Enter your Email"
      />
      <FormWithLabel
        label="Your Password"
        value={form.password}
        name="password"
        onChange={handleForm}
        placeholder="******"
      />
      <Box itemsCenter between fullWidth className="max-[550px]:flex-wrap">
        <Box itemsCenter className="gap-1 cursor-pointer">
          <MdCheckBoxOutlineBlank size={22} />
          <p className="text">Stay Signed in</p>
        </Box>
        <Link
          href="/auth/sign-in/reset-password"
          className="font-roboto font-medium hover:underline text-sm text-tomato-red"
        >
          Forgot Password?
        </Link>
      </Box>
      <Button
        colorScheme="success"
        onClick={submit}
        disabled={!form.email || !form.password}
      >
        Sign in
      </Button>
      <Button variant="surface" onClick={() => router.back()}>
        Back
      </Button>
      <p className="font-roboto text mt-1 font-normal text-center">
        Don&apos;t have an account?{" "}
        <Link className="text-red-500 hover:underline" href="/auth/register">
          Register
        </Link>
      </p>
    </AuthCard>
  );
};

export default SignIn;
