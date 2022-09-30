// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <>
    <Link to="/">
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="home-img"
        />
      </div>
    </Link>
  </>
)

export default Home
