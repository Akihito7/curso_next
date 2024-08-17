import RevalidatePath from "@/components/revalidatePath";
import RevalidateTag from "@/components/revalidateTag";

export default async function Login() {
  console.log("entrei aqui")
  const response = await fetch("https://api.origamid.online/acoes/lua",{
    next : {
      tags : ['actions']
    }
  })
  const data = await response.json();
  return (
    <div>
      <h1>Actions</h1>
      <h2>{data.nome}</h2>
      <h3>{data.atualizada}</h3>
      <RevalidatePath />
      <RevalidateTag />
    </div>
  )
}