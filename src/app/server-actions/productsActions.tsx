'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type AddProductTypes = {
  name: string;
  price: string;
  description: string;
  stock: string;
  isAvailable: 0 | 1
}
export async function addProduct({
  name,
  price,
  description,
  stock,
  isAvailable
}: AddProductTypes) {
  const response = await fetch("https://api.origamid.online/produtos", {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      nome: name,
      preco: Number(price),
      descricao: description,
      estoque: Number(stock),
      importado: isAvailable
    })
  })
  revalidatePath("/products")
  redirect("/products")
}

export async function revalidatePathActions(path: string) {
  revalidatePath(path);
}