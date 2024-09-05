// src/components/PostList.jsx
import React from 'react'
import Post from './Post'

const PostList = ({ posts }) => (
  <div>
    {posts.map((post, index) => (
      <Post key={index} title={post.title} content={post.content} />
    ))}
  </div>
)

export default PostList
