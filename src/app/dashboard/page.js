"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = () => {
    const stored = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(stored);
  };

  return (
    <div style={styles.container}>
      <h1>📊 My Dashboard</h1>

      {courses.length === 0 ? (
        <p>No enrolled courses 😢</p>
      ) : (
        <div style={styles.grid}>
          {courses.map((course) => (
            <div key={course.id} style={styles.card}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#020617",
    color: "white",
    minHeight: "100vh"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  },
  card: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "10px"
  }
};