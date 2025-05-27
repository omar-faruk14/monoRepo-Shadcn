"use client";
import { Button } from "@monorepo/ui/components/ui/button";
import { Input } from "@monorepo/ui/components/ui/input";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },  // <-- IMPORTANT
        body: JSON.stringify(data),
      });

      if (res.ok) {
        window.location.href = "/dashboard";
      } else {
        const text = await res.text();
        alert(`Signup failed: ${text}`);
      }
    } catch (error) {
      alert(`Signup error: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <Input placeholder="Email" {...register("email")} />
      <Input type="password" placeholder="Password" {...register("password")} />
      <Button type="submit">Sign Up</Button>
    </form>
  );
}
