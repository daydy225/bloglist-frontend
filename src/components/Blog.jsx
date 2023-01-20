import { useState } from 'react'

const Blog = ({ blog }) => {
  const [isVisible, setIsVisible] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const handleLike = () => {
    console.log('like')
  }

  const handleView = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={handleView}>{isVisible ? 'hide' : 'view'}</button>
      </div>

      <div style={isVisible ? { display: '' } : { display: 'none' }}>
        <div>{blog.url}</div>
        <div>
          likes {''}
          {blog.likes} <button onClick={handleLike}>like</button>
        </div>
        <div>{blog.user.name}</div>
      </div>
    </div>
  )
}

export default Blog
