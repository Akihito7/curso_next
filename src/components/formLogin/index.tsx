'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";
import { login } from "@/app/actions/login";
import { setCookies } from "@/app/actions/cookies";

export function FormLogin() {

  const router = useRouter()
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  async function handleLogin() {
    
    if(!username || !password) return;
    const response = await login({
      username,
      password
    });

    if(!response.token) return alert(response.message);

    setCookies("token", response.token, {
      httpOnly : true,
      secure : true
    })

    router.push("/")

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