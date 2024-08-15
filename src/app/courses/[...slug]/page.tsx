type CoursesPageParams = {
    params: {
        slug: string[]
    };
}

export default async function Product({ params }: CoursesPageParams) {
    return (
        <div>
            <h1>Courses</h1>
            <p>{params.slug.join("/")}</p>
        </div>
    )
}