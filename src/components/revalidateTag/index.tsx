'use client'

import { RevalidatePathAction } from "@/app/server-actions/revalidatePathAction"
import { RevalidateTagsAction } from "@/app/server-actions/revalidateTagsAction"

export default function RevalidateTag() {

  async function handleRevalidate(){
    await RevalidateTagsAction()
  }
  return (
    <div>
      <button onClick={handleRevalidate}>Revalidar por tags</button>
    </div>
  )
}