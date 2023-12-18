// banner image test case

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages";
import Banner from "@/components/bannerImage/Banner";
import { Text } from "@/components/bannerImage/banner.styles";
import Navbar from "@/components/Navbar/Navbar";

// mock useRouter
jest.mock(`next/router`, () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("home page", () => {
  it("renders navbar", () => {
    render(<Navbar />);

    const homeLink = screen.getByText("Home");
    const beautyLink = screen.getByText("Beauty");
    const fashionLink = screen.getByText("Fashion");

    expect(homeLink).toBeInTheDocument();
    expect(beautyLink).toBeInTheDocument();
    expect(fashionLink).toBeInTheDocument();

    fireEvent.click(homeLink);
    fireEvent.click(beautyLink);
    fireEvent.click(fashionLink);
  });

  it("renders banner component", () => {
    render(<Banner text={"Shop the styles of your favorite creators"} />);
    screen.debug();
  });

  it("renders with the correct static text", () => {
    const { getByText } = render(<Home />);

    expect(
      getByText(/shop the styles of your favorite creators/i)
    ).toBeInTheDocument();
  });

  it("render button", () => {
    const { getByRole } = render(<Home />);

    expect(
      getByRole("button", { name: /start exploring/i })
    ).toBeInTheDocument();
  });
});
