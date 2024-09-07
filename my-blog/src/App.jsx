import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Post from './components/Post'
import NewPost from './components/NewPost'
import PostPage from './pages/PostPage'

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First Post',
      content: 'This is the content of the first post.',
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the content of the second post.',
    },
  ])

  const addPost = (post) => {
    post.id = posts.length + 1
    setPosts([post, ...posts])
  }

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<Post posts={posts} />} />
          <Route path="/new" element={<NewPost addPost={addPost} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
