"use client";

import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript",
  },
  {
    id: 2,
    title: "Data Structures",
    description: "Master DSA concepts",
  },
  {
    id: 3,
    title: "React Basics",
    description: "Build modern web apps",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 p-6">
      
      <h1 className="text-4xl text-white text-center font-bold mb-8">
        📚 Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-5 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p className="text-gray-600 mt-2">{course.description}</p>

            <Link href={`/courses/${course.id}`}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                View Course
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}