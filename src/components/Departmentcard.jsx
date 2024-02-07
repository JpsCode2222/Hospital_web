import React from "react";

function Departmentcard(props) {
  return (
    <>
      <div className="col-lg-3 col-6">
        <div className="card border-0 shadow mt-4">
          <div className="card-body text-center">
            <h1 style={{ fontSize: "4rem" }}>
              {" "}
              <i className={`${props.icon} text-info`}></i>
            </h1>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Departmentcard;
