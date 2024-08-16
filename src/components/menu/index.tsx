import Link from "next/link";

export function Menu() {
  return (
    <ul>
      <li>
        <Link href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about#scrollHere"
          prefetch={true}
        /* scroll={false} */
        >
          About
        </Link>
      </li>

      <li>
        <Link href="/imc">
          IMC
        </Link>
      </li>

      <li>
        <Link href="/products">
          Products
        </Link>
      </li>

      <li>
        <Link href="/courses">Cursos</Link>
      </li>

      <li>
        <Link href="/actions">Ações</Link>
      </li>
    </ul>
  )
}


/* 
Para a navegação no next js, o link é muito usado, ele não apenas faz a navegação por páginas mas ele tem a capacidade de fazer isso com maestria
ele tem uma coisa chamda prefetch, que basicamente quando ele vai renderizar uma página, ele verifica se tem algum componente Link e se tiver
ele vai realizar um prefetch de todos dados daquela pagina em background, pra caso o usuario navegue para algumas daquelas paginas, ela apenas exiba
sem qualquer lentidao pra carregar os dados, porque ja foram carregados antes
*/

