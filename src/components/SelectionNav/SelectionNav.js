import React from "react";
import { Link } from "react-router-dom";
import "./SelectionNav.css";
const SelectionNav = () => {
  return (
    <div className="Home">
      <div className="options">
        
        <Link to={"/profile3"}>
          <span className="span1">Skills</span>
        </Link>
        <Link to={"/profile4"}>
          <span className="span1">Industrial Exposure</span>
        </Link>
        <Link to={"/profile5"}>
          <span className="span1">Domain and Certificates</span>
        </Link>
        <Link to={"/profile6"}>
          <span className="span1">Hackathons</span>
        </Link>
        <Link to={"/profile7"}>
          <span className="span1">Coding Profile</span>
        </Link>
        <Link to={"/profile8"}>
          <span className="span1">Extra Curricular</span>
        </Link>
      </div>
    </div>
  );
};

export default SelectionNav;
