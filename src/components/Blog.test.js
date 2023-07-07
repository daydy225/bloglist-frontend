/* eslint-disable linebreak-style */
import { render, screen } from '@testing-library/react';
import Blog from './Blog';

test('renders blog title and author, but not URL or number of likes by default', () => {
  const blog = {
    title: 'Test Blog',
    author: 'John Doe',
    url: 'https://example.com/blog',
    likes: 10,
    user: {
      name: 'Test User',
    },
  };

  const user = {
    name: 'Author',
  };

  const { container } = render(<Blog blog={blog} user={user} />);

  const divTitle = container.querySelector('.blogTitle');
  const divContent = container.querySelector('.blogContent');

  screen.debug();

  expect(divTitle).toHaveTextContent('Test Blog' && 'John Doe');
  expect(divContent).toHaveStyle('display: none');
});
