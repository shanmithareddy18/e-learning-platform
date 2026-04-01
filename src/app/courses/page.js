"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import courses from "../../data/courses.json";

export default function CoursePage() {
  const { id } = useParams();

  const course = courses.find((c) => c.id == id);

  const [enrolled, setEnrolled] = useState(false);

  // ✅ CHECK ON LOAD
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("courses")) || [];
      const exists = stored.find((c) => c.id === Number(id));
      if (exists) setEnrolled(true);
    }
  }, [id]);

  const enroll = () => {
  let stored = JSON.parse(localStorage.getItem("courses")) || [];

  console.log("Before Save:", stored);

  const exists = stored.find((c) => c.id === Number(id));

  if (!exists) {
    stored.push({
      id: Number(id),   
      title: course.title,
      description: course.description
    });

    localStorage.setItem("courses", JSON.stringify(stored));

    console.log("After Save:", stored);

    setEnrolled(true);
    alert("✅ Saved in localStorage");
  } else {
    alert("Already enrolled");
  }
};

  return (
    <div style={{ padding: "30px" }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <button onClick={enroll}>
        {enrolled ? "✅ Enrolled" : "🚀 Enroll"}
      </button>
    </div>
  );
}