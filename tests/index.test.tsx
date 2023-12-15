import SignUp from "../src/pages/signuppage";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it } from "node:test";


describe("Sign up page", () => {
    it("renders signup page",() => {
        const { getByTestId } = render(<SignUp />);
        const headerElement = getByTestId("");
        const loginDivElement = getByTestId("");
      
        expect(headerElement)
        expect(loginDivElement)
    })
});

function expect(headerElement: HTMLElement) {
    throw new Error("Function not implemented.");
}
