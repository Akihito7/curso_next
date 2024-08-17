export default async function Products(){
  const response = await fetch("https://api.origamid.online/produtos");
  const products = await response.json();

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {
          products.map((p : any) => (
            <li>{p.nome}</li>
          ))
        }
      </ul>
    </div>
  )
}