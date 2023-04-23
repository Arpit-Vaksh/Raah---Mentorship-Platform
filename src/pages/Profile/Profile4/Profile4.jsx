import React from "react";
import "./Profile4.css";
import Profilebar from "../../../components/Profilebar/Profilebar";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import { Link } from "react-router-dom";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";
import Footer from "../../../components/Footer/Footer";

const Profile4 = () => {
  return (
    <div className="Home">
      <Profilecomp step={"Step - 4"} />
      <Profilebar />
      <div className="maindiv">
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />
      <div className="prof">
      <div className="internship">
        <div className="company-name">
          <span>Company Name</span>
          <input
            style={{
              display: "flex",
              flexDirection: "column",
            }} placeholder="Enter the Company name"
          />
        </div>
        <div className="company-duration">
          <span>Duration</span>
          <input
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            placeholder="e.g: Jan/2022 - Mar/2022"
          />
        </div>
        <div className="company-skills">
          <span>Skills Used</span>
          <input
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            placeholder="e.g: Pyhon, Database, etc."
          />
        </div>
      </div>
      <div className="addmore-btn">
        <button type="submit">
          Add More
        </button>
      </div>
      <div className="next-btn">
        <Link to={"/Profile3"}>
          <button type="submit">
            Previous
          </button>
        </Link>
        <Link to={"/Profile5"}>
          <button type="submit">
            Next
            </button>
        </Link>
      </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Profile4;
