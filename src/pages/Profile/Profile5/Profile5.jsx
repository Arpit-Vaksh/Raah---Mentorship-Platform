import React from "react";
import "./Profile5.css";
import Profilebar from "../../../components/Profilebar/Profilebar";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import { Link } from "react-router-dom";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";
import Footer from "../../../components/Footer/Footer";


const Profile5 = () => {
  return (
    <div className="Home">
      <Profilecomp step={"Step - 5"} />
      <Profilebar />
      <div className="maindiv">
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />
      <div className="prof">
      <div className="domain">
        <div className="Domain-name">
          <span>Domain Name</span>
          <input
            style={{
              display: "flex",
              flexDirection: "column",
            }} placeholder="e.g: Python"
          />
        </div>
        <div className="Certificate">
          <span>Certificate name</span>
          <input
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            placeholder="e.g: PCAP Certificate, etc"
          />
        </div>
        <div className="Upload">
          <span>Upload Certificate</span>
          <input type="file"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          />
        </div>
      </div>
      <div className="addmore-btn">
        <button type="submit">
          Add More
        </button>
      </div>
      <div className="next-btn">
        <Link to={"/Profile4"}>
          <button type="submit">Prev</button>
        </Link>
        <Link to={"/Profile6"}>
          <button type="submit">Next</button>
        </Link>
      </div>
      </div>
    </div>
    
    <Footer />
    </div>
  );
};

export default Profile5;
