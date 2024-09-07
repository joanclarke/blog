// src/components/PostList.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'

const PostList = ({ posts }) => {
  return (
    // <div>
    //   {posts.map((post, index) => (
    //     <Post key={index} title={post.title} content={post.content} />
    //   ))}
    // </div>
    <div>
      <Link to="/new">Add New Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
