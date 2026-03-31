"use client";

import { useRouter } from "next/navigation";

export default function CourseCard({ course }) {
  const router = useRouter();

  return (
    <div style={styles.card}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>

      <button onClick={() => router.push(`/courses/${course.id}`)}>
        Start Learning →
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "15px",
    color: "white",
    transition: "0.3s"
  }
};