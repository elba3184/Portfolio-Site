import React from "react"
import img2 from "../../static/photo-2.png"
import img3 from "../../static/photo-3.png"
import img4 from "../../static/photo-4.png"
import img5 from "../../static/photo-5.png"
import img6 from "../../static/photo-6.png"
import "../scss/HoneyComb.scss"

const Images = () => {
  return (
    <div className="honeycomb-container">
      <ul className="honeycomb level-1">
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image right" src={img2} />
          <div className="honeycomb-cell__title">
            Gator Robotics <small>2017</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image center" src={img3} />
          <div className="honeycomb-cell__title">
            UF <small>Graduation</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image center" src={img4} />
          <div className="honeycomb-cell__title">
            Ironhack <small>First Day</small>
          </div>
        </li>
      </ul>

      <ul className="honeycomb level-2">
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image left" src={img6} />
          <div className="honeycomb-cell__title">
            Ironhack <small>Hackathon</small>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image center" src={img5} />
          <div className="honeycomb-cell__title">
            Ironhack <small>Last Day</small>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Images
