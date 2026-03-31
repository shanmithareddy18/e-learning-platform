"use client";

import CourseCard from "./components/CourseCard";
import courses from "./data/courses.json";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center" }}>🚀 Learn Without Limits</h1>

      <div style={styles.grid}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "linear-gradient(135deg,#020617,#0f172a)",
    minHeight: "100vh"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px"
  }
};