import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = ({ addPost }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addPost({ title, content })
    navigate('/')
    // setTitle('')
    // setContent('')
  }

  return (
    <div>
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  )
}

export default NewPost
