import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import PostCard from '@/components/inspirationPage/PostCard'; 
import imageData from '../../../imageData.json';

describe('PostCard Component - Functional Tests', () => {
  it('renders images by default', () => {
    render(<PostCard selectedCategory="All" />);
    const postCards = screen.getAllByRole('img');
    expect(postCards).toHaveLength(imageData.data.length);
  });

  it('toggles sorting order on button click', () => {
    render(<PostCard selectedCategory="All" />);
    const sortButton = screen.getByText(/latest/i);
    
    fireEvent.click(sortButton);
    expect(sortButton).toHaveTextContent('Oldest');

    fireEvent.click(sortButton);
    expect(sortButton).toHaveTextContent('Latest');
  });

  it('displays images based on selected category', () => {
    render(<PostCard selectedCategory="beauty" />);
    const beautyCategoryImages = imageData.data.filter(item => item.category === 'beauty');
    const postCards = screen.getAllByRole('img');
    expect(postCards).toHaveLength(beautyCategoryImages.length);
  });

  it('displays images based on selected category', () => {
    render(<PostCard selectedCategory="home" />);
    const homeCategoryImages = imageData.data.filter(item => item.category === 'home');
    const postCards = screen.getAllByRole('img');
    expect(postCards).toHaveLength(homeCategoryImages.length);
  });

  it('displays images based on selected category', () => {
    render(<PostCard selectedCategory="fashion" />);
    const fashionCategoryImages = imageData.data.filter(item => item.category === 'fashion');
    const postCards = screen.getAllByRole('img');
    expect(postCards).toHaveLength(fashionCategoryImages.length);
  });


  it('shows overlay on mouse enter and hides on mouse leave', async () => {
    render(<PostCard selectedCategory="All" />);
    const postCard = screen.getAllByRole('img')[0];

    fireEvent.mouseEnter(postCard);
    await waitFor(() => {
      const overlay = screen.getByTestId('main-overlay');
      expect(overlay).toBeInTheDocument();
    });

    fireEvent.mouseLeave(postCard);
    await waitFor(() => {
      const overlay = screen.queryByTestId('main-overlay');
      expect(overlay).not.toBeInTheDocument();
    });
  });

});
