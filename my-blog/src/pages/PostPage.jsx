import React from 'react'
import { useParams } from 'react-router-dom'
import Post from '../components/Post'

const PostPage = ({ posts }) => {
  const { id } = useParams()
  const post = posts.find((p, index) => index.toString() === id)
  if (!post) {
    return <p>Post not found</p>
  }

  return <Post title={post.title} content={post.content} />
}

export default PostPage
