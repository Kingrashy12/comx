"use client";

import React, { useEffect, useState } from "react";
import { AuthCard } from "../cards";
import FormWithLabel from "../ui/form-with-label";
import { Button } from "../ui";
import { useRouter, useSearchParams } from "next/navigation";
import { TextEncode } from "@/utils/global";
import { changePassword } from "@/helper/api";

const NewPassword = () => {
  const time_frame = useSearchParams().get("time-frame");
  const validity = TextEncode.decode(String(time_frame));
  const id = useSearchParams().get("id");
  const email = TextEncode.decode(String(id));
  const router = useRouter();
  const [form, setForm] = useState({ password: "", confirm_password: "" });
  const [errObj, setErrObj] = useState({ err: false, msg: "" });

  useEffect(() => {
    const expiresAt = new Date(validity);
    const notValid = new Date() > expiresAt;

    if (!time_frame || notValid) {
      router.push("/auth/sign-in/reset-password/");
    }
  }, [router, validity, time_frame]);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };

  const submit = async () => {
    const res = await changePassword({ email, ...form });
    setForm({ password: "", confirm_password: "" });
    if (!res.success) {
      setErrObj({ ...errObj, err: true, msg: res.message });
      return;
    }

    setErrObj({ ...errObj, err: false });
    router.push("/auth/sign-in/reset-password/success");
  };

  return (
    <AuthCard
      header="New Password"
      className="gap-3"
      subHeader="Enter your new login credentials below."
    >
      <FormWithLabel
        label="Password"
        value={form.password}
        name="password"
        onChange={handleForm}
        placeholder="Enter your Password"
        error={errObj.err}
        errorMessage={errObj.msg}
      />
      <FormWithLabel
        label="Confirm Password"
        value={form.confirm_password}
        onChange={handleForm}
        name="confirm_password"
        placeholder="******"
        error={errObj.err}
        errorMessage={errObj.msg}
      />

      <Button
        colorScheme="success"
        onClick={submit}
        disabled={!form.confirm_password || !form.password}
      >
        Update
      </Button>
    </AuthCard>
  );
};

export default NewPassword;
