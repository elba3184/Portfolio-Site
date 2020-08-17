import React, { Fragment } from "react"
import project1 from "../../static/project-1.png"
import project2 from "../../static/project-2.png"
import project3 from "../../static/project-3.png"
import "../scss/Projects.scss"

const Projects = () => {
  return (
    <Fragment>
      <div className="projects-container">
        <div className="title">PROJECTS (🛠UI In Progress)</div>
        <div className="project1">
          <div className="project-title">Harry Potter Maze</div>
          <a href="https://elba3184.github.io/Demo-Repo/home/index.html">
            {" "}
            <img src={project1} style={{ width: "550px", height: "300px" }} />
          </a>
          <p>
            The purpose of the game is to win the House Cup by running through a
            series of mazes that unlock a mini-game once having reached the end.
            The mini-games include a wizarding-knowledge quiz, a
            Rock-Paper-Scissors with spells, and a Gallaga-themed game with
            Dementors as targets.
          </p>
          <p>
            Collaborator:{" "}
            <a href="https://www.linkedin.com/in/jennifer-muniz/">
              Jennifer Muniz
            </a>
          </p>
          <p>Technologies: JavaScript, jQuery, HTML, CSS, Git, GitHub Pages</p>
          <p>Link: https://elba3184.github.io/Demo-Repo/home/index.html</p>
          <p>Github: https://github.com/elba3184/Harry-Potter-Game</p>
        </div>
        <div className="project2">
          <div className="project-title">Github Finder</div>
          <a href="https://elba-github-finder.netlify.app/">
            {" "}
            <img src={project2} style={{ width: "450px", height: "300px" }} />
          </a>
          <p>
            The purpose of the game is to win the House Cup by running through a
            series of mazes that unlock a mini-game once having reached the end.
            The mini-games include a wizarding-knowledge quiz, a
            Rock-Paper-Scissors with spells, and a Gallaga-themed game with
            Dementors as targets.
          </p>
          <p>Technologies: JavaScript, jQuery, HTML, CSS, Git, GitHub Pages</p>
          <p>Link: https://elba-github-finder.netlify.app/</p>
          <p>Github: https://github.com/elba3184/GitHub-Finder</p>
        </div>
        <div className="project3">
          <div className="project-title">Github Finder</div>
          <a href="https://elba-github-finder.netlify.app/">
            {" "}
            <img src={project3} style={{ width: "450px", height: "300px" }} />
          </a>
          <p>
            The purpose of the game is to win the House Cup by running through a
            series of mazes that unlock a mini-game once having reached the end.
            The mini-games include a wizarding-knowledge quiz, a
            Rock-Paper-Scissors with spells, and a Gallaga-themed game with
            Dementors as targets.
          </p>
          <p>Technologies: JavaScript, jQuery, HTML, CSS, Git, GitHub Pages</p>
          <p>Link: https://elba-github-finder.netlify.app/</p>
          <p>Github: https://github.com/elba3184/GitHub-Finder</p>
        </div>
      </div>

      <div className="projects-container-bottom"></div>
    </Fragment>
  )
}

export default Projects
