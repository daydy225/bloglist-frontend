import { useState } from 'react'

const Blog = ({ blog, update, deleteBlog }) => {
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
      <div>
        {blog.title} {blog.author}
        <button onClick={handleView}>{blogVisible ? 'hide' : 'view'}</button>
      </div>

      <div style={blogVisible ? { display: '' } : { display: 'none' }}>
        <div>{blog.url}</div>
        <div>
          likes {''}
          {blog.likes}{' '}
          <button
            onClick={() => update(blog.id, { ...blog, likes: blog.likes + 1 })}
          >
            like
          </button>
        </div>
        <div>{blog.user.name}</div>
        <button onClick={deleteABlog}>remove</button>
      </div>
    </div>
  )
}

export default Blog
