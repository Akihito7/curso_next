type Product = {
  id: number;
  nome: string;
}

export default async function ServerFetch() {
  const response = await fetch("https://api.origamid.online/produtos");
  const json: Product[] = await response.json();

  return (
    <ul>
      {
        json &&
        json.map(p => (
          <li key={p.id}>
            {p.nome}
          </li>
        ))
      }
    </ul>
  )
}


/* 
Fazendo requisição a api diretamente pelo componente server side
sem o use de useEffect e estados para gerenciar os dados, tudo é feito pelo lado do servidor
e entao podemos acessar os dados e usarmos normalmente, como fariamos com um estado

vantagens? 

como tudo acontece no servidor, a pagina ja vem montada, sendo assim os dados vao aparecer instantaneamente
*/