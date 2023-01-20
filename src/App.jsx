import { useState, useEffect } from 'react'
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
    message: null,
    type: 'error',
  })
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password,
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))

      blogService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')
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

  const addBlogs = async event => {
    event.preventDefault()

    try {
      const addedBlogs = await blogService.create({
        title,
        author,
        url,
      })
      setBlogs(blogs.concat(addedBlogs))
      setTitle('')
      setAuthor('')
      setUrl('')
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

  const logout = event => {
    event.preventDefault()
    window.localStorage.clear()
    setUser(null)
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
        <button
          type="button"
          onClick={logout}
        >
          logout
        </button>
      </div>

      <br />
      <Togglable buttonLabel="new note">
        <BlogForm
          handleSubmit={addBlogs}
          handleTitleChange={({ target }) => setTitle(target.value)}
          handleAuthorChange={({ target }) => setAuthor(target.value)}
          handleUrlChange={({ target }) => setUrl(target.value)}
          title={title}
          author={author}
          url={url}
        />
      </Togglable>

      {blogs.map(blog => (
        <Blog
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  )
}

export default App
