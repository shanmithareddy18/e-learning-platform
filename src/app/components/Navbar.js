"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div style={styles.nav}>
      <h2>🎓 LearnX</h2>

      <div>
        <Link href="/">Courses</Link>
        <Link href="/dashboard" style={{ marginLeft: 20 }}>Dashboard</Link>

        {user ? (
          <button onClick={logout} style={{ marginLeft: 20 }}>
            Logout
          </button>
        ) : (
          <Link href="/login" style={{ marginLeft: 20 }}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#020617",
    color: "white"
  }
};