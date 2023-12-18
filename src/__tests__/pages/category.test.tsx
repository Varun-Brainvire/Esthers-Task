import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Category from '@/components/inspirationPage/Category';
import { useRouter } from 'next/router';

// Mock useRouter
jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe('Category Component', () => {
  const mockOnTabClick = jest.fn();

  const filters = [
    { label: 'All' },
    { label: 'Beauty', imageSrc: 'beauty.jpg' },
    { label: 'Home', imageSrc: 'home.jpg' },
    { label: 'Fashion', imageSrc: 'fashion.jpg' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();  // Reset the mock before each test
  });

  test('renders Category component correctly', () => {
    // Mock the useRouter implementation
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });

    render(<Category selectedCategory="All" onTabClick={mockOnTabClick} />);

    // Check if the titles are rendered correctly
    expect(screen.getByText(/All/i)).toBeInTheDocument(); // ignore case sensitive with /i
    expect(screen.getByText(/Beauty/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Fashion/i)).toBeInTheDocument();

    // Check if each category is rendered correctly
    filters.forEach((filter) => {
      const categoryText = screen.getByText(new RegExp(filter.label, 'i'));
      expect(categoryText).toBeInTheDocument();

      if (filter.imageSrc) {
        const categoryImage = screen.getByAltText(new RegExp(`${filter.label} pic`, 'i'));
        expect(categoryImage).toBeInTheDocument();
      }
    });

    
    // Log the entire DOM structure
    // console.log(screen.debug());
    screen.debug();
  });

  test('calls onTabClick when a category is clicked', () => {
    // Mock the useRouter implementation
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });

    render(<Category selectedCategory="All" onTabClick={mockOnTabClick} />);
    screen.debug();

    // Simulate a click on the "Beauty" category
    fireEvent.click(screen.getByText(/Beauty/i));
    // Check if onTabClick was called with the correct argument
    expect(mockOnTabClick).toHaveBeenCalledWith('Beauty');

   
    fireEvent.click(screen.getByText(/Fashion/i));
    expect(mockOnTabClick).toHaveBeenCalledWith('Fashion');

    fireEvent.click(screen.getByText(/Home/i));
    expect(mockOnTabClick).toHaveBeenCalledWith('Home');
   
  });

  test('navigates to the correct route when a category is clicked', () => {
    // Mock the useRouter implementation
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    render(<Category selectedCategory="All" onTabClick={mockOnTabClick} />);

    // Simulating a click on the "Home" category
    fireEvent.click(screen.getByText(/Home/i)); 
    // Checking if useRouter.push was called with the correct argument
    expect(pushMock).toHaveBeenCalledWith('/inspiration/home'); 
    
    fireEvent.click(screen.getByText(/Beauty/i)); 
    expect(pushMock).toHaveBeenCalledWith('/inspiration/beauty'); 
    
    fireEvent.click(screen.getByText(/Fashion/i)); 
    expect(pushMock).toHaveBeenCalledWith('/inspiration/fashion'); 
  
  });
});
