import { Course, getAllCourses, getCourseById } from "@/src/api/course.api";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";
import React, { useEffect, useState } from "react";

type SingleCoursePageProps = {
  course: Course;
};

export default function SingleCoursePage({ course }: SingleCoursePageProps) {
  //   const [course, setCourse] = useState<Course | null>(null);
  //   const router = useRouter();
  //   useEffect(() => {
  //     getCourseById(router.query.id as string).then((data) => setCourse(data));
  //   }, [router.query.id]);

  return (
    <div>
      <h1>{course.title}</h1>
    </div>
  );
}

export const getStaticPaths = (async () => {
  const courses = await getAllCourses();
  const paths = courses
    .filter((_, index) => index < 3)
    .map((c) => ({
      params: {
        id: c.id,
      },
    }));
  return {
    paths,
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const course = await getCourseById(params!.id as string);
  return {
    props: {
      course,
    },
    revalidate: 60 * 60 * 24,
  };
}) satisfies GetStaticProps<{
  course: Course;
}>;
