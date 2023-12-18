import { render } from "@testing-library/react"
import Page from "../pages/create-post"

it("renders homepage unchanged", () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})
