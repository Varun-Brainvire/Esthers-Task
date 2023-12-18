import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../components/Forms/Form";

const mockPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock("next/link", () => {
    link:() => ({
      push:mockPush
    })
    return ({children}) => {

        return children;
    }
});

describe("Home", () => {
  it("Form Component", () => {
    render(<Form />);
    const createAccountButton = screen.getByTestId("createAccountButton");
    fireEvent.click(createAccountButton);

    expect(mockPush).toHaveBeenCalledWith(
      expect.objectContaining({
        pathname: "/signup",
      })
    );
  });

  it("checking button text", () => {
    render(<Form />);
    expect(screen.getByRole("button", { name: /create account/i }));
  });

  it("checking the login footer text", () => {
    render(<Form />);
    const text = screen.getByText(
      /by signing up, you accept our term of use\. read more about how we collect, use and share your data in our and how we use cookies and similar technology in our \./i
    );
    expect(text).toBeInTheDocument();
  });

  // it("Checking Login Link", () => {
  //   const link = screen.getByRole("link", {
  //     name: /login/i,
  //   });
  //   expect(link).toBeInTheDocument();
  // });
});
