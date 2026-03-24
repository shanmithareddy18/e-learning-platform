"use client";
import { useParams } from "next/navigation";
import VideoPlayer from "../../components/VideoPlayer";

export default function CourseDetails() {
  const params = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Course ID: {params.id}</h1>

      <p>This is your course content</p>

      <VideoPlayer />

      <button
        onClick={() => window.history.back()}
        style={{
          marginTop: "20px",
          padding: "10px",
          background: "blue",
          color: "white",
          border: "none"
        }}
      >
        Back
      </button>
    </div>
  );
}