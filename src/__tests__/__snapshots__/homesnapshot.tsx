import Home from "@/pages/inspiration/home";
import { render } from "@testing-library/react";

jest.mock(`next/router`, () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

it("renders Home unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
