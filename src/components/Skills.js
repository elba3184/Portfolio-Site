import React, { Fragment } from "react"
import { Icon } from "@iconify/react"
import awsIcon from "@iconify/icons-mdi/aws"
import apiIcon from "@iconify/icons-mdi/api"
import reduxIcon from "@iconify/icons-cib/redux"
import gatsbyIcon from "@iconify/icons-cib/gatsby"
import firebaseIcon from "@iconify/icons-cib/firebase"
import serverlessIcon from "@iconify/icons-gg/serverless"
import "../scss/Skills.scss"

const Skills = () => {
  return (
    <Fragment>
      <div className="skills-container">
        <div className="title">SKILLS & TOOLS</div>
        <div className="skills-item-container">
          <span className="flex-item">
            <i className="devicon-javascript-plain"></i>
          </span>
          <span className="flex-item">
            <i className="devicon-react-original-wordmark"></i>
          </span>
          <span className="flex-item">
            <div className="iconify-icon">
              <Icon icon={reduxIcon} />
            </div>
          </span>
          <span className="flex-item">
            <i className="devicon-nodejs-plain"></i>
          </span>
          <span className="flex-item">
            <i class="devicon-express-original"></i>
          </span>
          <span className="flex-item">
            <i className="devicon-html5-plain-wordmark"></i>
          </span>
          <span className="flex-item">
            <i className="devicon-css3-plain-wordmark"></i>
          </span>
          <span className="flex-item">
            <i className="devicon-sass-original"></i>
          </span>
        </div>

        <div className="skills-item-container">
          <span className="flex-item">
            <Icon icon={apiIcon} />
          </span>
          <span className="flex-item">
            <i className="devicon-git-plain-wordmark"></i>
          </span>
          <span className="flex-item">
            {" "}
            <i className="devicon-mongodb-plain-wordmark"></i>
          </span>
          <span className="flex-item">
            <i className="devicon-github-plain-wordmark"></i>
          </span>
          <span className="flex-item">
            {" "}
            <i className="devicon-heroku-line-wordmark"></i>
          </span>
          <span className="flex-item">
            <div className="iconify-icon">
              <Icon icon={firebaseIcon} />
            </div>
          </span>
          <span className="flex-item">
            {" "}
            <i className="devicon-visualstudio-plain"></i>
          </span>
        </div>
        <div className="currently-learning">
          Currently learning:
          <div className="skills-item-container">
            <span className="flex-item">
              <div className="iconify-icon">
                <Icon icon={serverlessIcon} />
              </div>
            </span>
            <span className="flex-item">
              <div className="iconify-icon">
                <Icon icon={awsIcon} />
              </div>
            </span>
            <span className="flex-item">
              <div className="iconify-icon">
                <Icon icon={gatsbyIcon} height="100px" width="100px" />
              </div>
            </span>
          </div>
          {/* <span> Serverless Stack, </span>
          <span>AWS Services (DynamoDB, API Gateway, Lambda, S3 Bucket), </span>
          <span>Gatsby </span> */}
        </div>
      </div>
      <div className="skills-container-bottom"></div>
    </Fragment>
  )
}

export default Skills
