import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <Link to="/"></Link>
      <Link to="/new">New Post</Link>
    </nav>
  </header>
)

export default Header
