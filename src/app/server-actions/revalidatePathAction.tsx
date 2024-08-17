'use server'

import { revalidatePath } from "next/cache"

export async function RevalidatePathAction(path : string) {
  revalidatePath(path, "page")
}