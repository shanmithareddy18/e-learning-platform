"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>🎓 LearnX</h2>

      <div>
        <Link href="/">Courses</Link>
        <Link href="/dashboard" style={{ marginLeft: 20 }}>Dashboard</Link>
        <Link href="/login" style={{ marginLeft: 20 }}>Login</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "rgba(0,0,0,0.8)",
    color: "white"
  }
};