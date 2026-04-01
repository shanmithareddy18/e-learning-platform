"use client";

import { useRouter } from "next/navigation";

export default function CourseCard({ course }) {
  const router = useRouter();

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{course.title}</h3>
      <p style={styles.desc}>{course.description}</p>

      <button
        style={styles.btn}
        onClick={() => router.push(`/courses/${course.id}`)}
      >
        Explore Course →
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "14px",
    border: "1px solid #1f2937",
    transition: "0.3s",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
  },
  title: {
    color: "white",
    fontSize: "18px",
    marginBottom: "10px"
  },
  desc: {
    color: "#9ca3af",
    marginBottom: "15px"
  },
  btn: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  }
};