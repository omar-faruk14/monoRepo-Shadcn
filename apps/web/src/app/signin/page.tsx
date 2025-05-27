"use client";
import { Button } from "@monorepo/ui/components/ui/button";
import { Input } from "@monorepo/ui/components/ui/input";
import { useForm } from "react-hook-form";

export default function SigninPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    const res = await fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) window.location.href = "/dashboard";
    else alert("Login failed");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <Input placeholder="Email" {...register("email")} />
      <Input type="password" placeholder="Password" {...register("password")} />
      <Button type="submit">Sign In</Button>
    </form>
  );
}
