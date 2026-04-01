"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    login(email);
    router.push("/dashboard");
  };

  return (
    <div style={{ padding: "20px", background: "#020617", height: "100vh", color: "white" }}>
      <h1>🔐 Login</h1>

      <input
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}