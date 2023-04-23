import React from "react";
import { Link } from "react-router-dom";
import Profilecomp from "../../../components/Profilecomp/Profilecomp";
import Profilebar from "../../../components/Profilebar/Profilebar";
import SelectionNav from "../../../components/SelectionNav/SelectionNav";
import "./Profile8.css";
import Footer from "../../../components/Footer/Footer";
const Profile8 = () => {
  return (
    <div className="Home">
      <Profilecomp step={"Step - 8"} />
      <Profilebar />
      <div className="maindiv">
      <hr style={{ marginBottom: "10px" }} />
      <SelectionNav />
      <hr style={{ marginTop: "10px" }} />
      <div className="prof">
      <div className="extra">
        <center style={{color:"#0999f2", fontWeight:"bold",}}>Extra Co-Curricular Acivities</center>
        <input
          type="text"
          style={{ width: "30%" }}
          placeholder="Enter the field name. e.g: Sports, etc"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          style={{ width: "30%" }}
          placeholder="Write your achievements"
        ></textarea>
      </div>
      <div className="addmore-btn">
        <button type="submit">
          Add More
        </button>
      </div>
      <div className="next-btn">
        <Link to={"/Profile7"}>
          <button type="submit">Prev</button>
        </Link>
        <Link to={"/Dummy"}>
          <button type="submit">Done</button>
        </Link>
      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile8;
