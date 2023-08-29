/* eslint-disable linebreak-style */
import { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, update, deleteBlog, user }) => {
  const [blogVisible, setBlogVisible] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const handleView = () => {
    setBlogVisible(!blogVisible)
  }

  const deleteABlog = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      deleteBlog(blog.id)
    }
  }

  return (
    <div style={blogStyle}>
      <div className="blogTitle">
        {blog.title} {blog.author}
        <button onClick={handleView}>{blogVisible ? 'hide' : 'view'}</button>
      </div>

      <div
        style={blogVisible ? { display: '' } : { display: 'none' }}
        className="blogContent"
      >
        <div>{blog.url}</div>
        <div data-test="like-count">
          likes
          {blog.likes}{' '}
          <button
            onClick={() => update(blog.id, { ...blog, likes: blog.likes + 1 })}
          >
            like
          </button>
        </div>
        <div data-test="blog-author">{blog.user.name}</div>
        {blog.user.name === user.name ? (
          <button onClick={deleteABlog}>remove</button>
        ) : null}
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

export default Blog
