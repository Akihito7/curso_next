'use client'
import { getCookies as serverGetCookies } from "@/app/server-actions/cookies"
import { useState } from "react";

export function GetCookies() {
  const [cookies, setCookies] = useState("");
  async function handleFetchCookies() {
    const cookies = await serverGetCookies("token");
    if (cookies?.value) setCookies(cookies?.value)
  }
  return (
    <div>
      <h1>cookies : {cookies}</h1>
      <button
        onClick={handleFetchCookies}
      >
        Pegar cookies
      </button>
    </div>
  )
}