"use client";

import { useEffect, useState } from "react";

export default function CourseDetails({ params }) {
  const [id, setId] = useState(null);
  const [enrolled, setEnrolled] = useState(false);

  // ✅ Fix for Next.js 16 (params is async)
  useEffect(() => {
    async function getId() {
      const resolved = await params;
      setId(resolved.id);
    }
    getId();
  }, [params]);

  // ⏳ Loading
  if (!id) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] text-center">
        
        {/* 🎓 Course Title */}
        <h1 className="text-2xl font-bold mb-4">
          Course ID: {id}
        </h1>

        {/* 📄 Description */}
        <p className="text-gray-600 mb-4">
          This is where course videos and content will be shown.
        </p>

        {/* 🎥 VIDEO PLAYER */}
        <video controls className="w-full rounded mb-4">
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* ✅ ENROLL BUTTON */}
        <button
          onClick={() => setEnrolled(true)}
          className={`w-full py-2 rounded text-white ${
            enrolled ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {enrolled ? "Enrolled ✅" : "Enroll Now"}
        </button>

        {/* 🔙 BACK BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="mt-4 w-full bg-gray-500 text-white py-2 rounded"
        >
          🔙 Back
        </button>

      </div>
    </div>
  );
}