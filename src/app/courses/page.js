"use client";

import { useParams } from "next/navigation";
import courses from "../../data/courses.json";
import VideoPlayer from "../../components/VideoPlayer";

export default function CoursePage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id == id);

  const enroll = () => {
    let list = JSON.parse(localStorage.getItem("courses")) || [];
    list.push(course);
    localStorage.setItem("courses", JSON.stringify(list));
    alert("Enrolled!");
  };

  return (
    <div style={{ padding: "20px", color: "white", background: "#020617" }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <VideoPlayer src={course.video} />

      <br /><br />
      <button onClick={enroll}>Enroll</button>
    </div>
  );
}