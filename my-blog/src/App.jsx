import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '/.components/Header'
import Footer from 'components/Footer'
import Home from './pages/Home'
import PostPage from './pages/PostPage'

const App = () => {
  const [posts, setpPosts] = useState([])

  const addPost = (post) => {
    setpPosts([post, ...posts])
  }

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home onAddPost={addPost} posts={posts} />}
          />
          <Route path="/post/:id" element={<PostPage posts={posts} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
