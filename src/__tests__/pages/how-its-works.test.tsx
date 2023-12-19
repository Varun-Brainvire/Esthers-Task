import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import index from "../../pages/howitworks";
import MidContainer from "@/components/midContainer/MidContainer";
import MobileTextContainer from "@/components/mobileTextContainer/MobileTextContainer";

it("renders with the correct static text", () => {
  const { getByText } = render(
    <MidContainer
      text={"Grow your affiliate business by making your content shoppable"}
    />
  );

  expect(
    getByText(/Grow your affiliate business by making your content shoppable/i)
  ).toBeInTheDocument();
});

it("renders without crashing", () => {
  render(<MobileTextContainer />);
});
