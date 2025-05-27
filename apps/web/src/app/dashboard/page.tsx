"use client";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(setUser)
      .catch(() => (window.location.href = "/signin"));
  }, []);

  return (
    <div className="p-4">
      {user ? <h1>Welcome {user.email}</h1> : <p>Loading...</p>}
    </div>
  );
}
