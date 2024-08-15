import { getManyCourses } from "@/services/courses"
import Link from "next/link";

export default async function Courses() {
    const courses = await getManyCourses();
    return (
        <div>
            
            <h1>Cursos</h1>

            <ul>
                {courses &&
                    courses.map(course => (
                        <li>
                            <Link href={`/courses/${course.slug}`}>
                                {course.nome}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}