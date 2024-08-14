import { Width } from "@/components/width"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Page about"
}

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Width />
    </>
  )
}