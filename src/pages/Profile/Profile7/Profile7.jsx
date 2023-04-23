import React from "react";
import "./Profile7.css";
import Profilebar from "../../../components/Profilebar/Profilebar";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import StarRating from "../../../components/StarRating";
import { Link } from "react-router-dom";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";
import Footer from "../../../components/Footer/Footer";

const Profile7 = () => {
  return (
    <div className="Home">
      <Profilecomp step={"Step - 7"} />
      <Profilebar />
      <div className="maindiv">
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />
      <div className="prof">
      <center>
        <h1>Problem Solving</h1>
      </center>
      <div className="questions">
        <div className="platform Leetcode">
          <span>Leetcode</span>
          <input type="number" style = {{width:"10%", marginLeft: "60px"}} placeholder="No. of questions"/>
          <input
            type="text"
            placeholder="Enter the link to your profile"
            style={{ marginLeft: "150px" }}
          />
        </div>
        <div className="platform GFG">
          <span>GFG</span>
          <input type="number" style = {{width:"10%", marginLeft: "114px"}} placeholder="No. of questions"/>
          <input
            type="text"
            placeholder="Enter the link to your profile"
            style={{ marginLeft: "150px" }}
          />
        </div>
        <div className="platform HackerRank">
          <span>HackerRank</span>
          <input type="number" style = {{width:"10%", marginLeft: "36px"}} placeholder="No. of questions"/>
          <input
            type="text"
            placeholder="Enter the link to your profile"
            style={{ marginLeft: "150px" }}
          />
        </div>
        <div className="platform CodeChef">
          <span>CodeChef</span>
          <input type="number" style = {{width:"10%", marginLeft: "55px"}} placeholder="No. of questions"/>
          <input
            type="text"
            placeholder="Enter the link to your profile"
            style={{ marginLeft: "150px", marginRight: "110px" }}
          />
          <StarRating />
        </div>
        <div className="platform CodeForces">
          <span>CodeForces</span>
          <input type="number" style = {{width:"10%", marginLeft: "35px"}} placeholder="No. of questions"/>
          <input
            type="text"
            placeholder="Enter the link to your profile"
            style={{ marginLeft: "152px", marginRight: "108px" }}
          />
          <StarRating />
        </div>
        <div className="platform Interviewbit">
          <span>InterviewBit</span>
          <input type="number" style = {{width:"10%", marginLeft: "32px"}} placeholder="No. of questions"/>
          <input
            type="text"
            placeholder="Enter the link to your profile"
            style={{ marginLeft: "150px" }}
          />
        </div>
      </div>
      <div className="next-btn">
        <Link to={"/Profile6"}>
          <button type="submit">Prev</button>
        </Link>
        <Link to={"/Profile8"}>
          <button type="submit">Next</button>
        </Link>
      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile7;
