import { render } from "@testing-library/react"
import PostCard from "@/components/inspirationPage/PostCard"

it("renders postcard unchanged", () => {
  const { container } = render(<PostCard selectedCategory="" />)
  expect(container).toMatchSnapshot()
})
