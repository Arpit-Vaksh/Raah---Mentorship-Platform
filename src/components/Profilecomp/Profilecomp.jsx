import React from "react";
import { Link } from "react-router-dom";
import DataVerseRaah from "../../images/DataVerseRaah.png";
import "./Profilecomp.css"

const Profilecomp = (props) => {
  return (
    <div className="profile-nav">
    <div>
        <img className="logo" src={DataVerseRaah} alt="Raah" />
      </div>
    <div style={{ textAlign: "center", marginRight:"7.5rem" }}>
      <h1>
        Complete Your Profile : <span>{props.step}</span>
      </h1>
    </div>
    <div >
    
      <Link to="/" >
      <button className="exit-btn">
        Exit
       </button>
      </Link>
      
    </div>
    </div>
  );
};

export default Profilecomp;
