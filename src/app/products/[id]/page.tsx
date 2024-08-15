type ProductPageParams = {
    params: {
        id: string
    };
}

type Product = {
    nome: string;
    preco: string;
    descricao: string;
}

export default async function Product({ params }: ProductPageParams) {

    const response = await fetch(`https://api.origamid.online/produtos/${params.id}`);
    const data: Product = await response.json();
    console.log(data)

    return (
        <div>
            <h1>{data.nome}</h1>
            <p>{data.descricao}</p>
            <p>{data.preco}</p>
        </div>
    )
}