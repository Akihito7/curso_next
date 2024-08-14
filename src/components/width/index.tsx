'use client'
import { useEffect, useState } from "react"

export function Width() {
  const [width, setWidth] = useState(0);
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