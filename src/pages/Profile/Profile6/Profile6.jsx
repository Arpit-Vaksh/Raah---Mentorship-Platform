import React from "react";
import Profilebar from "../../../components/Profilebar/Profilebar";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import { Link } from "react-router-dom";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";
import "./Profile6.css";
import Footer from "../../../components/Footer/Footer";

const Profile6 = () => {
  return (
    <div className="Home">
      <Profilecomp step={"Step - 6"} />
      <Profilebar />
      <div className="maindiv">
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />
      <div className="prof">
      <div className="hackathon">
      <div className="hackathon-name">
          <span>Hackathon Name</span>
          <input
            style={{
              display: "flex",
              flexDirection: "column",
            }} placeholder="e.g: Namma Yatri, etc"
          />
        </div>
        <div className="Problem">
          <span>Problem Statement</span>
          <textarea
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            placeholder="Write the problem statement."
          ></textarea>
        </div>
        <div className="Approach">
          <span>Approach</span>
          <textarea
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            placeholder="Write the approach used for solving the problem."
          ></textarea>
        </div>
        <div className="">
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
        <Link to={"/Profile5"}>
          <button type="submit">Prev</button>
        </Link>
        <Link to={"/Profile7"}>
          <button type="submit">Next</button>
        </Link>
      </div>
    </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Profile6;
