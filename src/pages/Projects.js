import React, { Fragment } from "react"
import project1 from "../../static/project-1.png"
import project2 from "../../static/project-2.png"
import project3 from "../../static/project-3.png"
import project4 from "../../static/project-4.png"
import project5 from "../../static/project-5.png"
import project6 from "../../static/project-6.png"
import "../scss/Projects.scss"

const Projects = () => {
  return (
    <Fragment>
      <div className="projects-container">
        <div className="title">Projects</div>
        <div className="item-container">
     <div className="project-column-1">     
      <div className="project1">
            <a href="https://elba3184.github.io/Demo-Repo/home/index.html" target="_blank" rel="noreferrer">
              {" "}
              <img src={project1} className="project-1-img" alt="Harry Potter Game"/>
            </a>
             <div className="flex-item github">
          </div>
            {/* <p>
            Collaborator:{" "}
            <a href="https://www.linkedin.com/in/jennifer-muniz/">
              Jennifer Muniz
            </a>
            </p>*/}
          </div>
          <div className="project2">
            <a href="https://elba-github-finder.netlify.app/" target="_blank" rel="noreferrer">
              {" "}
              <img src={project2} className="project-2-img" alt="GitHub Finder" />
            </a>
          </div>
          <div className="project3">
            <a href="https://github.com/elba3184/chatcord" target="_blank" rel="noreferrer">
              {" "}
              <img src={project3} className="project-3-img" alt="ChatCord" />
            </a>
          </div>
          
        </div>

        <div className="project-column-2">  
         <div className="project4">
            <a href="https://elba-contact-keeper.herokuapp.com/login" target="_blank" rel="noreferrer">
              {" "}
              <img src={project4} className="project-4-img" alt="Contact Keeper" />
            </a>
          </div>
          <div className="project5">
            <a href="https://vybrant-aesthetic.herokuapp.com/" target="_blank" rel="noreferrer">
              {" "}
              <img src={project5} className="project-5-img" alt="Aesthetic" />
            </a>
          </div>
          <div className="project6">
            <a href="https://github.com/elba3184/it-logger-app" target="_blank" rel="noreferrer">
              {" "}
              <img src={project6} className="project-6-img" alt="IT Logger" />
            </a>
          </div>
          </div>
        </div>
        <div className="project-fight-pandemics">
          <p>I'm currently volunteering as a part-time Full-Stack Developer at <a href="http://fightpandemics.com/" target="_blank" rel="noreferrer">FightPandemics</a></p>
          <p>They're always looking for volunteers in all areas: Design, Marketing, Operations, Engineering, Product Management, etc. </p>
          <p>Check them out at <a href="http://fightpandemics.com/" target="_blank" rel="noreferrer">http://fightpandemics.com/</a></p>
        </div>

        <div className="project-github">
          <p>For more projects check out my <a href="https://github.com/elba3184/" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
      </div>
    </Fragment>
  )
}

export default Projects
