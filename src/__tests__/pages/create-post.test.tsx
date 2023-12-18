import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import FlotingMenu from "@/create-post-component.tsx/FlotingMenu"
import Page from "../../pages/create-post"
import StepButtons from "@/components/createPost/stepButtons/stepButtons"
import BottomButtons, {
  Button,
} from "@/components/createPost/bottomButtons/bottomButtons"
import { Styled_Button } from "@/components/createPost/bottomButtons/bottomButtons.styles"
import { Input } from "@/create-post-component.tsx/FlotingMenu.styles"
it("renders a page", () => {
  render(<Page />)
  const heading = screen.getByText("Create Image Post")
  screen.debug()
  expect(heading).toBeInTheDocument()
})

it("renders a button", () => {
  render(<Page />)
  const button = screen.getByText("Apply to be Creator")

  expect(button).toBeInTheDocument() // Asserts the button is present
})

it("renders a StepButtons ", () => {
  render(<StepButtons />)
  const button1 = screen.queryAllByText("Add caption & hashtags")
})

it("renders a StepButtons ", () => {
  const label = "Click me"
  const { getByTestId } = render(<Button label={label} />)

  const button = getByTestId(label)

  expect(button).toBeInTheDocument()
})

// Input

it("renders a click to upload or drag and drop input label  ", () => {
  render(<Page />)
  let label = screen.getByText(/click to upload or drag and drop/i)
  expect(label).toBeInTheDocument()
})

it("renders a choose from instagram label   ", () => {
  render(<Page />)
  let label = screen.getByText(/choose from instagram/i)
  expect(label).toBeInTheDocument()
})

// getByText(/click to upload or drag and drop/i)
