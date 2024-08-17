'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addProduct(
  state: { errors: string[] },
  formData: FormData) {

  let errors = []

  const product = {
    nome: formData.get("name"),
    preco: Number(formData.get("price")),
    descricao: formData.get("description"),
    estoque: Number(formData.get("stock")),
    importado: formData.get("isAvailable") ? 1 : 0
  }

  if (!product.nome || typeof product.nome != 'string') errors.push("invalid name");
  if (!product.descricao || typeof product.descricao != "string") errors.push("invalid description")

  if (errors.length > 0) return { errors }


  await fetch("https://api.origamid.online/produtos", {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(product)
  })

  revalidatePath("/products")
  redirect("/products")
}

export async function revalidatePathActions(path: string) {
  revalidatePath(path);
}
