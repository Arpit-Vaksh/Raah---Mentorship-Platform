import React from 'react'
import './Footer.css'
import DataVerseRaah from "../../images/DataVerseRaah.png";
const Footer = () => {
  return (
    <div className="main-div">
    <div className='FooterDiv'>
      <hr />
      <div className="footerRow">
        <div className="col1">
        <img id="logo" src={DataVerseRaah} alt="Raah" />
          <h2>Raah - A Mentorship Platform</h2>
          <p>&copy; 2023 Raah, Inc.</p>
        </div>
        <div className="col2">
          <ul>
            <li>FAQ</li>
            <li>Contact</li>
            <li>About</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div className="col3">
          <ul>
            <li>Mentors</li>
            <li>Featured</li>
            <li>Achievments</li>
            <li>support</li>
          </ul>
        </div>
        <div className="col3" width="20%">
          <h3>Give your Career a new Path with <br /> RAAH - Mentorship</h3>
        </div>
      </div>
        </div>
      </div>
  )
}

export default Footer