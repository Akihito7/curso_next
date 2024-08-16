'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

export function FormLogin() {

  const router = useRouter()
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  async function handleLogin() {
    const response = await fetch("http://localhost:3000/api/login", {
      method: 'POST',
      headers : {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    if (!response.ok) return alert("email e ou senha inválidos");
    router.push("/account")
  } 

  return (
    <div className="loginContainer">
      <div className="containerInput">
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>

      <div className="containerInput">
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <button onClick={handleLogin}>
        Logar
      </button>
    </div>
  )
}