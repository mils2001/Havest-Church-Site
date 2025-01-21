import React, { Component } from 'react'
import './Navbar.css'


export class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </nav>
  
      </div>
    )
  }
}

export default Navbar