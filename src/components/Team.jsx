import React from "react";
import Teamcard from "./Teamcard";

function Team() {
  return (
    <>
      <div className="container pt-5 pb-4">
        <h3 className="text-center">Our Team</h3>
        <h5 className="text-center mb-5">
          <span
            className="p-2"
            style={{ borderBottom: "5px solid #61dafb", borderRadius: "5px" }}
          >
            Take a look at some of our key features
          </span>
        </h5>
        <div className="row">
          <Teamcard
            img="../assets/team-memb1.webp"
            dr="Devid Kuneul"
            pos="Facial Surgun"
          ></Teamcard>
          <Teamcard
            img="../assets/team-memb2.webp"
            dr="Devid Kuneu"
            pos="Facial Surgun"
          ></Teamcard>
          <Teamcard
            img="../assets/team-memb1.webp"
            dr="Devid Kuneul"
            pos="Facial Surgun"
          ></Teamcard>
          <Teamcard
            img="../assets/team-memb2.webp"
            dr="Devid Kuneu"
            pos="Facial Surgun"
          ></Teamcard>
        </div>
      </div>
    </>
  );
}

export default Team;
