"use client";

import CourseCard from "./components/CourseCard";
import courses from "./data/courses.json";

export default function Home() {
  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>📚 SkillForge Academy</h1>
        <p style={styles.subtitle}>
          Master in-demand skills with industry-level courses
        </p>
      </div>

      {/* COURSES */}
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
    background: "#020617",
    minHeight: "100vh",
    padding: "40px"
  },
  header: {
    marginBottom: "30px"
  },
  title: {
    color: "white",
    fontSize: "32px",
    fontWeight: "bold"
  },
  subtitle: {
    color: "#9ca3af",
    marginTop: "5px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "20px"
  }
};