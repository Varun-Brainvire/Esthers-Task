import { ReactNode } from "react"
import Navbar from "../create-post-component.tsx/NavBar"
import styled from "styled-components"

export default function NestedLayout({ children }: { children: ReactNode }) {
  return <main style={{ height: "100%" }}>{children}</main>
}

{
  /* <Navbar />
      <main style={}>{children}</main> */
}
