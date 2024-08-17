'use server'

type LoginProps = {
  username: string;
  password: string;
}
export async function login({ username, password }: LoginProps) {

const response = await fetch("https://api.origamid.online/conta/login", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  });

  if(!response.ok) return {
    message : "Email e/ou senha inválidos"
  }

  const { token } = await response.json();

  return {token}
}