import React, { Component } from "react"
import Scroll from "./Scroll"
import logo from "../../static/logo.png"
import "../css/Navbar.css"

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
      visibilityClass: "",
    }
  }
  toggleMenu = value => {
    this.setState({ openMenu: value })
  }
  handleScroll = () => {
    const { visibilityClass } = this.state
    if (window.pageYOffset > 300) {
      if (visibilityClass !== "navbar-shrink") {
        this.setState({ visibilityClass: "navbar-shrink" })
      }
    } else {
      if (visibilityClass === "navbar-shrink") {
        this.setState({ visibilityClass: "" })
      }
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    const { openMenu, visibilityClass } = this.state
    return (
      <nav
        className={`navbar navbar-expand-lg fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <Scroll type="id" element="home">
            <a href="#">
              <img src={logo} className="logo" />
            </a>
          </Scroll>
          <button
            onClick={() => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? "" : "collapsed"
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Icons
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? "show" : ""}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="home"
                >
                  <a className="nav-link" href="#">
                    HOME
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="about"
                >
                  <a className="nav-link" href="#about">
                    ABOUT
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="skills"
                >
                  <a className="nav-link longer" href="#skills">
                    SKILLSET
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="projects"
                >
                  <a className="nav-link longer" href="#projects">
                    PROJECTS
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="contact"
                >
                  <a className="nav-link longer" href="#contact">
                    CONTACT
                  </a>
                </Scroll>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
