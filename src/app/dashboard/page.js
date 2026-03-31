"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }

    const data = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(data);
  }, []);

  return (
    <div style={{ padding: "20px", background: "#020617", minHeight: "100vh", color: "white" }}>
      <h1>📊 My Dashboard</h1>

      {courses.length > 0 ? (
        courses.map((c, i) => (
          <div key={i} style={{ marginBottom: "15px" }}>
            <h3>{c.title}</h3>

            <div style={{ background: "#333", height: "8px" }}>
              <div style={{ width: "40%", background: "#6366f1", height: "8px" }}></div>
            </div>
          </div>
        ))
      ) : (
        <p>No enrolled courses 😢</p>
      )}
    </div>
  );
}