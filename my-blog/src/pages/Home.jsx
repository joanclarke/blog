import React, { useState } from 'react'
import PostList from '../components/PostList'
import NewPost from '../components/NewPost'

const Home = () => {
  const [posts, setPosts] = useState([])

  const addPost = (post) => {
    setPosts([post, ...posts])
  }

  return (
    <div>
      <h1>My Blog</h1>
      <NewPost onAddPost={addPost} />
      <PostList posts={posts} />
    </div>
  )
}

export default Home
