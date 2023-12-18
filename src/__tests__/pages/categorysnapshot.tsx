import { render } from "@testing-library/react";
import Category from "@/components/inspirationPage/Category";
import { useRouter } from "next/router";

jest.mock('next/router', () => ({
    __esModule: true,
     useRouter : jest.fn(),
  }));

it("renders category unchanged", () => {
  
  const mockOnTabClick = jest.fn();
  const { container } = render(<Category  selectedCategory="All" onTabClick={mockOnTabClick}/>)
  expect(container).toMatchSnapshot()
});