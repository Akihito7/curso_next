import fs from "fs/promises"

export async function Acess() {
  await fs.appendFile("acess.txt", `${Date()} `, "utf-8");
  const data = await fs.readFile("acess.txt", "utf-8");

  return (
    <p>
      {data}
    </p>
  )
}

/* 
Componente gerado no lado do servidor, isso é do next mesmo,
 como ele é gerado do lado do servidor então podemos usar coisas de backend nesse componente
como a lib fs que não temos acesso em um react componente client side
*/