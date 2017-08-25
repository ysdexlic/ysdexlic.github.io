import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
