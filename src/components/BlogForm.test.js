/* eslint-disable linebreak-style */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import BlogForm from './BlogForm'

describe('<BlogForm />', () => {
  test('that the form calls the event handler it received as props with the right details when a new blog is created', async () => {
    const addBlog = jest.fn()

    const user = userEvent.setup()

    const component = render(<BlogForm addBlog={addBlog} />)

    const titleInput = component.container.querySelector('#title')
    const authorInput = component.container.querySelector('#author')
    const urlInput = component.container.querySelector('#url')
    const submitButton = screen.getByText('create')

    await user.type(titleInput, 'Test Blog')
    await user.type(authorInput, 'John Doe')
    await user.type(urlInput, 'https://example.com/blog')
    // await user.submit(form)
    await user.click(submitButton)

    expect(addBlog.mock.calls).toHaveLength(1)
    expect(addBlog.mock.calls[0][0].title).toBe('Test Blog')
    expect(addBlog.mock.calls[0][0].author).toBe('John Doe')
    expect(addBlog.mock.calls[0][0].url).toBe('https://example.com/blog')
  })
})
