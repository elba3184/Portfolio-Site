import React, { Component } from "react"
import Scroll from "./Scroll"
import { Icon } from "@iconify/react"
import menuIcon from "@iconify/icons-heroicons-outline/menu"
import xIcon from "@iconify/icons-bi/x"
import DarkModeButton from '../components/DarkModeButton'
// import logo from "../../static/logo.jpeg"
import "../scss/Navbar.scss"

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
      visibilityClass: "top",
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
        this.setState({ visibilityClass: "top" })
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
        className={`navbar navbar-expand-lg ${visibilityClass} ${
          openMenu ? "opened" : "collapsed"
        }`}
        id="mainNav"
      >
        <div className="container">
          <Scroll type="id" element="home">
            <a href="#">{/* <img src={logo} className="logo" /> */}</a>
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
            {openMenu ? (
              <Icon icon={xIcon} className="menu-closed" />
            ) : (
              <Icon icon={menuIcon} className="menu-opened" />
            )}
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? "show" : ""}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <div className="nav-item-hover">
                <li className="nav-item">
                  <Scroll
                    onClick={() => this.toggleMenu(!openMenu)}
                    type="id"
                    element="home"
                  >
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </Scroll>
                </li>
              </div>
              <div className="nav-item-hover">
                <li className="nav-item">
                  <Scroll
                    onClick={() => this.toggleMenu(!openMenu)}
                    type="id"
                    element="about"
                  >
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </Scroll>
                </li>
              </div>
              <div className="nav-item-hover">
                <li className="nav-item medium">
                  <Scroll
                    onClick={() => this.toggleMenu(!openMenu)}
                    type="id"
                    element="skills"
                  >
                    <a className="nav-link" href="#skills">
                      Skillset
                    </a>
                  </Scroll>
                </li>
              </div>
              <div className="nav-item-hover">
                <li className="nav-item long">
                  <Scroll
                    onClick={() => this.toggleMenu(!openMenu)}
                    type="id"
                    element="projects"
                  >
                    <a className="nav-link" href="#projects">
                      Projects
                    </a>
                  </Scroll>
                </li>
              </div>
              <li className="nav-item-contact">
                <Scroll
                  onClick={() => this.toggleMenu(!openMenu)}
                  type="id"
                  element="contact"
                >
                  <a className="nav-link contact" href="#contact">
                    Contact
                  </a>
                </Scroll>
              </li>
              {/* <div><DarkModeButton /></div> */}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
