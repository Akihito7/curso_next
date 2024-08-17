'use server'

import { revalidatePath, revalidateTag } from "next/cache"

export async function RevalidateTagsAction() {
  //revalidatePath("/actions")
  revalidateTag("actions")
}