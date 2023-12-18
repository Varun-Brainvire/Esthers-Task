import Navbar from "@/components/Navbar/Navbar";
import { render } from "@testing-library/react";

jest.mock(`next/router`, () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

it("renders navbar unchanged", () => {
  const { container } = render(<Navbar />);
  expect(container).toMatchSnapshot();
});
