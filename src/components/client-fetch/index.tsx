'use client'

type Product = {
  id: number;
  nome: string;
}

import { useEffect, useState } from "react"

export default function ClientFetch() {

  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.origamid.online/produtos");
      const json: Product[] = await response.json();
      setData(json)
    }

    fetchData()
  }, [])

  return (
    <ul>
      {
        data &&
        data.map(p => (
          <li key={p.id}>
            {p.nome}
          </li>
        ))
      }
    </ul>
  )
}

/* 
forma tradicional de buscar dados a api, usando estado para armazenar os valores
e useEffect pra realizar a chamada a api e setar os dados

desvantagem? 

isso vai acontecer do lado do client entao, nao vai ser instantaneo para termos os dados em tela
e tambem os dados nao vao aparecer na SEO
*/