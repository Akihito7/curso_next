'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function Search(){
  const search = useSearchParams().get("search");
  const neymar = useSearchParams().get("neymar")
  return (
    <>

    <p>Search : {search}</p>
    <p>Neymar : {neymar}</p>
    </>
  )
}

export function Menu() {
  return (
    <>
    <ul>
      <li>
        <Link href="/"
        >
          Home
        </Link>
      </li>

    </ul>
    <Search />
    </>
  )
}


/* 
Para a navegação no next js, o link é muito usado, ele não apenas faz a navegação por páginas mas ele tem a capacidade de fazer isso com maestria
ele tem uma coisa chamda prefetch, que basicamente quando ele vai renderizar uma página, ele verifica se tem algum componente Link e se tiver
ele vai realizar um prefetch de todos dados daquela pagina em background, pra caso o usuario navegue para algumas daquelas paginas, ela apenas exiba
sem qualquer lentidao pra carregar os dados, porque ja foram carregados antes
*/

