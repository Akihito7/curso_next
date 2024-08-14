import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Page about"
}

export default function About() {
  return (
    <>
      <h1>About</h1>
      <h2
        id="scrollHere"
        style={{
          marginTop : 1000,
          marginBottom : 1000,
        }}
      >
        SCROLL HERE
      </h2>
    </>
  )
}