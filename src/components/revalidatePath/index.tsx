'use client'

import { RevalidatePathAction } from "@/app/server-actions/revalidatePathAction"

export default function RevalidatePath() {

  async function handleRevalidate(){
    await RevalidatePathAction("/actions")
  }
  return (
    <div>
      <button onClick={handleRevalidate}>Revalidar por path</button>
    </div>
  )
}