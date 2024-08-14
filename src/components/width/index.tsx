'use client'
import { useEffect, useState } from "react"

export default function Width() {

  /* 
    Embora o componente seja um client, a pré renderização dele ocorre no lado do servidor
    então se eu tentar usar uma api web fora de um effect, ele ira dar erro, isso porque o servidor não tem acesso a api web
    const [width, setWidth] = useState(window.document.documentElement.clientWidth);
    então iniciar o estado assim não ira funcionar, porque window é da web

    o componente em si vai ser renderizado do lado do servidor mas a hidratação vai acontecer no lado do client
    entao basicamente ele vai renderizar o html, css no lado do servidor mas se voce tiver por exemplo um button que tenha um onclick
    ele vai hidratar esse componente no lado do client isso é, o javascript so vai ser lido no lado do client isso tambem acontece no useEffect
    so vai ser lido no lado do client

    mas se voce precisa começar um componente ja com algum valor de uma api web, voce pode importar ele de forma dinamica, usando o Dynamic
    veja em about
  */
  const [width, setWidth] = useState(window.document.documentElement.clientWidth);
  const [isActived, setIsActived] = useState(false);

  useEffect(() => {

    function handleResize() {
      setWidth(window.document.documentElement.clientWidth);
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])


  return (
    <>
      <h2
        style={{
          color: isActived ? "#680" : "#b00"
        }}
      >
        Largura da tela : {width}
      </h2>

      <button
        onClick={() => setIsActived(prev => !prev)}
      >
        {isActived ? "Desativar" : "Ativar"}
      </button>
    </>
  )
}

/* 
Componente executado no lado do client, então temos acesso as apis da web e tudo que o react ja nos fornece!
é so um componente react comum mesmo
*/