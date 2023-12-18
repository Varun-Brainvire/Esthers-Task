import { ReactNode } from "react"
import Navbar from "../create-post-component.tsx/NavBar"
import styled from "styled-components"

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
export default function NestedLayout({ children }: { children: ReactNode }) {
  return (
    <Main>
      <Navbar />
      {children}
    </Main>
  )
}
