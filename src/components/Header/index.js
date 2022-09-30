// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="header-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="hamburger-button"
              testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="hamburger-icon" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <>
              <button
                type="button"
                className="close-button"
                testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
              <div className="icons-container">
                <Link to="/" onClick={() => close()} className="icon-link">
                  <ul className="menu-icons-cont">
                    <AiFillHome className="icons" />
                    <li className="icons-texts">Home</li>
                  </ul>
                </Link>

                <Link to="/about" onClick={() => close()} className="icon-link">
                  <ul className="menu-icons-cont">
                    <BsInfoCircleFill className="icons" />
                    <li className="icons-texts">About</li>
                  </ul>
                </Link>
              </div>
            </>
          )}
        </Popup>
      </nav>
    )
  }
}
export default Header
