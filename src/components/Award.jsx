import React from "react";
import Awardcard from "./Awardcard";

function Award() {
  return (
    <>
      <div className="container pt-5 pb-4">
        <h3 className="text-center">
          <span
            style={{ borderBottom: "5px solid #61dafb", borderRadius: "5px" }}
          >
            Awards
          </span>
        </h3>
        <div className="row">
          <Awardcard img="../assets/award4.webp"></Awardcard>
          <Awardcard img="../assets/award3.webp"></Awardcard>
          <Awardcard img="../assets/award1.jpg"></Awardcard>
        </div>
      </div>
    </>
  );
}

export default Award;
