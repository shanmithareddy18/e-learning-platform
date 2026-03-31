"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    localStorage.setItem("user", email);
    router.push("/dashboard");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>🔐 Login</h2>

        <input
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#020617"
  },
  box: {
    background: "#0f172a",
    padding: "30px",
    borderRadius: "10px"
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    width: "100%"
  }
};