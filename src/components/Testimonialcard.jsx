import React from "react";

function Testimonialcard() {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mt-4 shadow h-100 w-100">
          <div className="card-body d-flex flex-column">
            <h1 className="text-info">
              <i class="fa-solid fa-quote-left"></i>
            </h1>
            <p>
              <i>
                {" "}
                "I wish to express my deep appreciation for the wonderful care I
                received at the Hospital of the University of Pennsylvania"
              </i>
            </p>
            <h1 className="text-info text-right">
              <i class="fa-solid fa-quote-right"></i>
            </h1>
            <center>
              <div
                className="bg-info"
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50%",
                  // backgroundColor: "#1AB69D",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                <h1 className="pt-2 text-white">
                  <i className="fa-regular fa-user"></i>
                </h1>
              </div>
              <p className="text-center">
                <b>Allian Coole</b>
              </p>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonialcard;
