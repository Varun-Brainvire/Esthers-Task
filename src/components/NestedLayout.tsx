import { ReactNode } from "react"
import Navbar from "../create-post-component.tsx/NavBar"
import styled from "styled-components"

export default function NestedLayout({ children }: { children: ReactNode }) {
  return (
    <main style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Navbar />
      <main
        style={{ height: "100%", border: "5px dotted red", margin: "10px" }}
      >
        {children}
      </main>
    </main>
  )
}

{
  /* <Navbar />
      <main style={}>{children}</main> */
}
