const BlogForm = ({
  handleSubmit,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
  title,
  author,
  url,
}) => {
  return (
    <div>
      <h2>Create new</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            title:
            <input
              type="text"
              name="Title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            author:
            <input
              type="text"
              name="Author"
              value={author}
              onChange={handleAuthorChange}
            />
          </div>
          <div>
            url:
            <input
              type="text"
              name="Url"
              value={url}
              onChange={handleUrlChange}
            />
          </div>
          <button type="submit">create</button>
        </form>
      </div>
    </div>
  )
}

export default BlogForm
