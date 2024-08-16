import { cookies } from "next/headers"

export default async function Account() {
  const token = cookies().get("token")?.value
  const response = await fetch("http://localhost:3000/api/account", {
    method: 'POST',
    body: JSON.stringify({
      token
    })
  })

  const { account } = await response.json()
  return (
    <div>
      <h1>account</h1>
      <h1>User : {account.usuario}</h1>
      <p>autorizado : {account.autorizado ? "sim" : "nao"}</p>
    </div>
  )
}