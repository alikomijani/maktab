import { baseURL } from "./api.config";

export type Course = {
  id: string;
  title: string;
  description: string;
  information: string;
  isOpen: boolean;
};

export async function getAllCourses() {
  const res = await fetch(baseURL + "/courses");
  return (await res.json()) as Course[];
}

export async function getCourseById(id: string) {
  const res = await fetch(`${baseURL}/courses/${id}`);
  return (await res.json()) as Course;
}
