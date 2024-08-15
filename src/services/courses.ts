type Course = {
    id : number;
    nome : string;
    slug : string;
    descricao : string;
    total_aulas : number;
    total_horas : number;
}

type CourseBySlug = {
    id : number;
    nome : string;
    slug : string;
    descricao : string;
    total_aulas : number;
    total_horas : number;
    aulas : {
        id : number;
        nome : string;
        slug : string;
        descricao : string;
        curso_id : number;
        tempo : number;
    }[]
}

type LessonProps = {
    id : number;
    nome : string;
    slug : string;
    descricao : string;
    curso_id : number;
    tempo : number;
}

export async function getManyCourses(){
    const response = await fetch("https://api.origamid.online/cursos");
    const data : Course[] = await response.json();
    return data;
}

export async function getCourseBySlug(slug : string){
    const response = await fetch(`https://api.origamid.online/cursos/${slug}`);
    const data : CourseBySlug = await response.json();
    return data;
}

export async function getLesson(courseSlug : string, lessonSlug : string){
    const response = await fetch(`https://api.origamid.online/cursos/${courseSlug}/${lessonSlug}`);
    const data : LessonProps = await response.json();
    return data;
}