import { render } from "@testing-library/react"
import Home from "../pages/test"

it("renders homepage unchanged", () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
