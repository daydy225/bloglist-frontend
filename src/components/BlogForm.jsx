/* eslint-disable linebreak-style */
import { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleChange = event => {
    setTitle(event.target.value)
  }
  const handleAuthorChange = event => {
    setAuthor(event.target.value)
  }
  const handleUrlChange = event => {
    setUrl(event.target.value)
  }

  const createBlog = event => {
    event.preventDefault()
    addBlog({
      title,
      author,
      url,
    })
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <h2>Create new</h2>
      <div>
        <form onSubmit={createBlog}>
          <div>
            title:
            <input
              type="text"
              name="Title"
              value={title}
              id="title"
              onChange={handleTitleChange}
            />
          </div>
          <div>
            author:
            <input
              type="text"
              name="Author"
              value={author}
              id="author"
              onChange={handleAuthorChange}
            />
          </div>
          <div>
            url:
            <input
              type="text"
              name="Url"
              value={url}
              id="url"
              onChange={handleUrlChange}
            />
          </div>
          <button type="submit">create</button>
        </form>
      </div>
    </div>
  )
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
}

export default BlogForm
