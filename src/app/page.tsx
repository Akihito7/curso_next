'use client'
import { setCookies } from "./actions/set-cookie";

export default function Home() {
  function handleSetCookies(){
    setCookies("secret", "12345")
  };

  return (
    <main>
      <h1>Hello NextJS</h1>
      <button onClick={handleSetCookies}>Definir cookies</button>
    </main>
  );
}
