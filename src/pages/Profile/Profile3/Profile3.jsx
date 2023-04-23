import React from "react";
import Profilebar from "../../../components/Profilebar/Profilebar";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import "./Profile3.css";
import { Link } from "react-router-dom";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";
import Footer from "../../../components/Footer/Footer";

const Profile3 = (props) => {
  return (
    <div className="Home">
      <Profilecomp step={"Step - 3"} />
      <Profilebar />
      <div className="maindiv">
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />
      <div className="prof">
      
      <div className="skills">
        <div className="tech-skills">
          <span>Technical Skills</span>
          <div className="tech-details">
            <textarea name="techskills" id="tech-skills" rows="5" placeholder="e.g: Java, Python, React, etc"></textarea>
          </div>
        </div>
        <div className="Interpersonal-skills">
          <span>Interpersonal Skills</span>
          <div className="inter-details">            
          <textarea name="interskills" id="inter-skills" rows="5" placeholder="e.g: Leadership, Quick Learner, etc"></textarea>
          </div>
        </div>
        <div className="other-skills">
          <span>Other Skills</span>
          <div className="other-details">            
          <textarea name="otherskills" id="other-skills" rows="5" placeholder="e.g: Designing, Editing, etc"></textarea>
          </div>
        </div>
      </div>
      <div className="next-btn">
      <Link to={"/Profile2"}>
        <button type="submit">
          Previous
        </button>
      </Link>
      <Link to={"/Profile4"}>
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

export default Profile3;
