import React from "react";

function Featurecard(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mt-4 shadow">
          <div className="card-body text-center d-flex flex-column">
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
                <h1 className="pt-2">
                  <i className={`${props.icon} text-white`}></i>
                </h1>
              </div>
            </center>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featurecard;
