export type Course = {
  id: string;
  title: string;
  description: string;
  information: string;
  isOpen: boolean;
};

export async function getAllCourses() {
  const res = await fetch("http://localhost:3000/courses");
  return (await res.json()) as Course[];
}

export async function getCourseById(id: string) {
  const res = await fetch(`http://localhost:3000/courses/${id}`);
  return (await res.json()) as Course;
}
