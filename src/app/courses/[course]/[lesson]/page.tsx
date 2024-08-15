import { getLesson } from "@/services/courses"
import Link from "next/link";

type LessonProps = {
    params : {
        course : string,
        lesson : string
    }
}

export default async function Lesson({ params } : LessonProps){
    const lesson = await getLesson(params.course, params.lesson);
    return (
        <div>
            <Link href={`/courses/${params.course}`}>
                {params.course}
            </Link>
            <h1>Curso : {params.course} / Aula : {params.lesson}</h1>
            <p>Aula :{lesson.nome}</p>
            <p>Descrição : {lesson.descricao}</p>
            <p>Duração : {lesson.tempo}</p>
        </div>
    )
}