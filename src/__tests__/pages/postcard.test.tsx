import React from 'react';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import PostCard from '@/components/inspirationPage/PostCard';
import imageData from '../../../imageData.json';

describe('PostCard Component', () => {
  test('renders without crashing', () => {
    render(<PostCard selectedCategory="All" />);
  });

  test('renders all posts by default', () => {
    const { getAllByRole } = render(<PostCard selectedCategory="All" />);
    const postCards = getAllByRole('img');
    expect(postCards).toHaveLength(imageData.data.length);
  });

  test('toggles sorting order without errors', () => {
    const { getByText } = render(<PostCard selectedCategory="All" />);
    const sortButton = getByText(/latest/i);
    expect(() => fireEvent.click(sortButton)).not.toThrow();
  });

  test('displays overlay on mouse enter without errors', () => {
    const { getAllByRole } = render(<PostCard selectedCategory="All" />);
    const postCard = getAllByRole('img')[0];
    expect(() => fireEvent.mouseEnter(postCard)).not.toThrow();
  });

  test('hides overlay on mouse leave without errors', () => {
    const { getAllByRole } = render(<PostCard selectedCategory="All" />);
    const postCard = getAllByRole('img')[0];
    fireEvent.mouseEnter(postCard);
    expect(() => fireEvent.mouseLeave(postCard)).not.toThrow();
  });

  test('correctly displays the initial sorting order', () => {
    const { getByText } = render(<PostCard selectedCategory="All" />);
    const sortButton = getByText(/latest/i);
    expect(sortButton).toHaveTextContent('Latest');
  });

  test('changes sorting order text after clicking the button', () => {
    const { getByText } = render(<PostCard selectedCategory="All" />);
    const sortButton = getByText(/latest/i);
    fireEvent.click(sortButton);
    expect(sortButton).toHaveTextContent('Oldest');
  });

  test('displays posts based on the selected category', () => {
    const { getAllByRole } = render(<PostCard selectedCategory="beauty" />);
    const postCards = getAllByRole('img');
    const beautyCategoryPosts = imageData.data.filter(item => item.category === 'beauty');
    expect(postCards).toHaveLength(beautyCategoryPosts.length);
  });

  test('displays posts based on the selected category', () => {
    const { getAllByRole } = render(<PostCard selectedCategory="home" />);
    const postCards = getAllByRole('img');
    const homeCategoryPosts = imageData.data.filter(item => item.category === 'home');
    expect(postCards).toHaveLength(homeCategoryPosts.length);
  });

  test('displays posts based on the selected category', () => {
    const { getAllByRole } = render(<PostCard selectedCategory="fashion" />);
    const postCards = getAllByRole('img');
    const fashionCategoryPosts = imageData.data.filter(item => item.category === 'fashion');
    expect(postCards).toHaveLength(fashionCategoryPosts.length);
  });
   
  test.todo('tests for a new feature');
});
