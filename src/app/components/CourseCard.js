"use client";
import styles from "./CourseCard.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CourseCard({ course }) {
  const [enrolled, setEnrolled] = useState(false);

  // LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    if (saved.includes(course.id)) {
      setEnrolled(true);
    }
  }, [course.id]);

  // SAVE TO LOCAL STORAGE
  const handleEnroll = () => {
    let saved = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    if (saved.includes(course.id)) {
      saved = saved.filter((id) => id !== course.id);
      setEnrolled(false);
    } else {
      saved.push(course.id);
      setEnrolled(true);
    }

    localStorage.setItem("enrolledCourses", JSON.stringify(saved));
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{course.title}</h3>
      <p className={styles.desc}>{course.description}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <Link href={`/courses/${course.id}`}>
          <button className={styles.btn}>View</button>
        </Link>

        <button
          onClick={handleEnroll}
          style={{
            background: enrolled ? "green" : "#f59e0b",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          {enrolled ? "Enrolled ✅" : "Enroll"}
        </button>
      </div>
    </div>
  );
}