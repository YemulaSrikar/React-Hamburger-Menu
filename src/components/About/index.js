// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const About = () => (
  <>
    <Link to="/about">
      <div className="about-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
          className="about-img"
        />
      </div>
    </Link>
  </>
)
export default About
