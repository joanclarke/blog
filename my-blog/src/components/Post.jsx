import React from 'react'
import { useParams } from 'react-router-dom'

// const Post = ({ title, content }) => (
//   <article>
//     <h2>{title}</h2>
//     <p>{content}</p>
//   </article>
// )

const Post = ({ posts }) => {
  const { id } = useParams()
  const post = posts.find((p) => p.id === parseInt(id))

  if (!post) {
    return <div> Post not found</div>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default Post
