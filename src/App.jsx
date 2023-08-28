import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notificationMsg, setNotificationMsg] = useState({
    message: '',
    type: 'error',
  })

  const fetchBlogs = async () => {
    const response = await blogService.getAll()
    setBlogs(response.sort((a, b) => b.likes - a.likes))
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const userData = JSON.parse(loggedUserJSON)
      setUser(userData)
    }
  }, [])

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const loggedUser = await loginService.login({
        username,
        password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser',
        JSON.stringify(loggedUser),
      )

      blogService.setToken(loggedUser.token)

      setUser(user)
      setUsername('')
      setPassword('')
      window.location.reload()
    } catch (exeption) {
      setNotificationMsg({
        message: 'wrong username or password',
        type: 'error',
      })
      setTimeout(() => {
        setNotificationMsg({
          message: null,
        })
      }, 5000)
    }
  }
  const blogFormRef = useRef()
  const addBlogs = async newObject => {
    blogFormRef.current.toggleVisibility()
    try {
      blogService.setToken(user.token)
      const addedBlogs = await blogService.create(newObject)
      setBlogs(blogs.concat(addedBlogs))
      setNotificationMsg({
        message: `a new blog ${addedBlogs.title} by ${addedBlogs.author} added`,
      })
      setTimeout(() => {
        setNotificationMsg({
          message: null,
        })
      }, 5000)
    } catch (exeption) {
      setNotificationMsg({
        message: 'An error occured while adding a new blog',
        type: 'error',
      })
      setTimeout(() => {
        setNotificationMsg({
          message: null,
        })
      }, 5000)
    }
  }

  const updateBlogs = async (id, newObject) => {
    try {
      console.log('updateBlogs', id, newObject)
      blogService.setToken(user.token)
      const updatedBlogs = await blogService.update(id, newObject)
      setBlogs(blogs.map(blog => (blog.id === id ? updatedBlogs : blog)))
    } catch (exeption) {
      setNotificationMsg({
        message: 'An error occured while updating a blog',
        type: 'error',
      })
      setTimeout(() => {
        setNotificationMsg({
          message: null,
        })
      }, 5000)
    }
  }

  const deleteBlogs = async id => {
    try {
      blogService.setToken(user.token)
      await blogService.deleteBlog(id)
      setBlogs(blogs.filter(blog => blog.id !== id))
    } catch (exeption) {
      setNotificationMsg({
        message: 'An error occured while deleting a blog',
        type: 'error',
      })
      setTimeout(() => {
        setNotificationMsg({
          message: null,
        })
      }, 5000)
    }
  }

  const logout = event => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
    window.location.reload()
  }

  if (user === null) {
    return (
      <div>
        <h2>log in to application</h2>
        <Notification
          message={notificationMsg.message}
          type={notificationMsg.type}
        />
        <LoginForm
          username={username}
          password={password}
          handleSubmit={handleLogin}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
        />{' '}
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification
        message={notificationMsg.message}
        type={notificationMsg.type}
      />
      <div>
        {user.name} logged in
        <button type="button" onClick={logout}>
          logout
        </button>
      </div>

      <br />
      <Togglable
        buttonLabel="create new"
        buttonLabel2="cancel"
        ref={blogFormRef}
      >
        <BlogForm addBlog={addBlogs} />
      </Togglable>

      {blogs.map(blog => (
        <Blog
          key={blog.id}
          blog={blog}
          update={updateBlogs}
          deleteBlog={deleteBlogs}
          user={user}
        />
      ))}
    </div>
  )
}
export default App
