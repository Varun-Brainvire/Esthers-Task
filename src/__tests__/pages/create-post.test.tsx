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

it("renders a click to upload or drag and drop input label  ", () => {
  render(<Page />)
  let label = screen.getByText(/click to upload or drag and drop/i)
  expect(label).toBeInTheDocument()
})

it("renders a choose from instagram label   ", () => {
  render(<Page />)
  let label = screen.getByText(/choose from instagram/i)
  // screen.debug()
  expect(label).toBeInTheDocument()
})

// getByText(/click to upload or drag and drop/i)

//  querySelector('#image_upload')

it("renders a choose from instagram label   ", () => {
  let { container } = render(<Page />)
  let label = container.querySelector("#image_upload")
  screen.debug()
  expect(label).toBeInTheDocument()
})

// getByText(/add products/i)

it("rendersbuttons with text  add products ", () => {
  render(<Page />)
  let button = screen.getByText(/add products/i)
  screen.debug()
  expect(button).toBeInTheDocument()
})

// screen.getByText(/create image post/i)

it("rendersbuttons with text  create image post ", () => {
  render(<Page />)
  let button = screen.getByText(/create image post/i)
  screen.debug()
  expect(button).toBeInTheDocument()
})

// screen.getByText(/add caption & hashtags/i)

it("rendersbuttons with tex  add caption & hashtags ", () => {
  render(<Page />)
  let button = screen.getByText(/add caption & hashtags/i)
  screen.debug()
  expect(button).toBeInTheDocument()
})

// FileUploadField.test.tsx
