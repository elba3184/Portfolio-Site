import React, { Fragment } from "react"
import project1 from "../../static/project-1.png"
import project2 from "../../static/project-2.png"
import project3 from "../../static/project-3.png"
import "../scss/Projects.scss"

const Projects = () => {
  return (
    <Fragment>
      <div className="projects-container">
        <div className="title">Projects</div>
        <div className="item-container">
          <div className="project1">
            <div className="project-title">Harry Potter Maze</div>
            <a href="https://elba3184.github.io/Demo-Repo/home/index.html">
              {" "}
              <img src={project1} className="project-1-img" />
            </a>
            {/* <p>
            Collaborator:{" "}
            <a href="https://www.linkedin.com/in/jennifer-muniz/">
              Jennifer Muniz
            </a>
          </p>
          <p>Technologies: JavaScript, jQuery, HTML, CSS, Git, GitHub Pages</p>
          <p>Link: https://elba3184.github.io/Demo-Repo/home/index.html</p>
          <p>Github: https://github.com/elba3184/Harry-Potter-Game</p> */}
          </div>
          <div className="project2">
            <div className="project-title">Github Finder</div>
            <a href="https://elba-github-finder.netlify.app/">
              {" "}
              <img src={project2} className="project-2-img" />
            </a>
            {/* <p>Technologies: JavaScript, jQuery, HTML, CSS, Git, GitHub Pages</p>
          <p>Link: https://elba-github-finder.netlify.app/</p>
          <p>Github: https://github.com/elba3184/GitHub-Finder</p> */}
          </div>
          <div className="project3">
            <div className="project-title">Github Finder</div>
            <a href="https://elba-github-finder.netlify.app/">
              {" "}
              <img src={project3} className="project-3-img" />
            </a>
            {/* <p>Technologies: JavaScript, jQuery, HTML, CSS, Git, GitHub Pages</p>
          <p>Link: https://elba-github-finder.netlify.app/</p>
          <p>Github: https://github.com/elba3184/GitHub-Finder</p> */}
          </div>
        </div>
      </div>

      {/* <div className="projects-container-bottom"></div> */}
    </Fragment>
  )
}

export default Projects
