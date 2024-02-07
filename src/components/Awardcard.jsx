import React from "react";

function Awardcard(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card shadow mt-5 w-100">
          <div className="card-body">
            <img
              src={props.img}
              style={{ position: "relative" }}
              className="h-50 w-100"
              alt=""
            />
            <img
              src="../assets/award_logo.png"
              style={{ position: "absolute", left: "0", top: "-10px" }}
              className="w-25"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Awardcard;
