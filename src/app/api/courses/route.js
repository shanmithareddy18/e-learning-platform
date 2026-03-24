export async function GET() {
  const courses = [
    { id: 1, title: "React Basics", description: "Learn React step by step" },
    { id: 2, title: "Next.js", description: "Build powerful apps with Next.js" },
    { id: 3, title: "JavaScript", description: "Master JavaScript fundamentals" }
  ];

  return Response.json(courses);
}