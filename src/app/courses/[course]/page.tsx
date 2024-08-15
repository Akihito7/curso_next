import { getCourseBySlug } from "@/services/courses"
import Link from "next/link";

type CourseParams = {
    params: {
        course: string
    }
}

export default async function Course({ params }: CourseParams) {
    const course = await getCourseBySlug(params.course);
    
    return (
        <div>
            <Link href="/courses">Cursos</Link>
            <h1>Curso selecionado : {course.nome}</h1>
            <ul>
                {
                    course.aulas &&
                    course.aulas.map(a => (
                        <li>
                            <Link href={`${course.slug}/${a.slug}`}>
                                {a.nome}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}