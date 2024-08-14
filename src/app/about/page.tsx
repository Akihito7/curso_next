import ClientFetch from "@/components/client-fetch";
import { Metadata } from "next"
import dynamic from "next/dynamic"

// Importa o componente de forma dinâmica e desativa a renderização do lado do servidor
const Width = dynamic(() => import('@/components/width'), { ssr: false });

/* 
É dessa forma que importamos um componente de forma dinâmica. Para que serve?
Serve para componentes que você não quer que sejam pré-renderizados no lado do servidor por algum motivo.
Um exemplo é quando você precisa usar alguma API Web ou acessar funcionalidades que não estão disponíveis no lado do servidor,
e isso causaria erro se o componente fosse pré-renderizado no servidor. 
Ao desativar a renderização do lado do servidor, o componente é renderizado apenas no lado do cliente, onde essas APIs ou funcionalidades estão disponíveis.

OBS: Esse componente será tratado exatamente como o React trata todos os seus componentes, renderizando 100% no lado do cliente.
*/

export const metadata: Metadata = {
  title: "About",
  description: "Page about"
}

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Width />
      <ClientFetch />
    </>
  )
}