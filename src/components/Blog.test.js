/* eslint-disable linebreak-style */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';

describe('<Blog />', () => {
  let container

  beforeEach(() => {
    const blog = {
      title: 'Test Blog',
      author: 'John Doe',
      url: 'https://example.com/blog',
      likes: 10,
      user: {
        name: 'Test User',
      },
    };

    // const user = {
    //   name: 'Test User',
    // }

    container = render(<Blog blog={blog} user={blog.user} />).container;
  })

  test('renders blog title and author, but not URL or number of likes by default', () => {
    const divTitle = container.querySelector('.blogTitle');
    const divContent = container.querySelector('.blogContent');

    expect(divTitle).toHaveTextContent('Test Blog' && 'John Doe');
    expect(divContent).toHaveStyle('display: none');
  });

  test('renders blog URL and number of likes when view button is clicked', async () => {
    const user = userEvent.setup();
    const viewButton = screen.getByText('view');
    await user.click(viewButton);
    const divContent = container.querySelector('.blogContent');
    expect(divContent).not.toHaveStyle('display: none');
  })
})
