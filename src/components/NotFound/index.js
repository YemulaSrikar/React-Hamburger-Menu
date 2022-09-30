// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <>
    <Link to="/notfound">
      <p className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1 className="error-heading">Lost Your Way?</h1>
        <p className="error-desc">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </p>
    </Link>
  </>
)
export default NotFound
