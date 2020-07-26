import React from "react"
// import logo from "../../public/logo.png"
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        Logo
      </a>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
