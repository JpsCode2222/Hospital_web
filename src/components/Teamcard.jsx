import React from "react";

function Teamcard(props) {
  return (
    <>
      <div className="col-lg-3">
        <div className="card mt-3">
          <div className="card-body p-0">
            <img className="h-100 w-100" src={`${props.img}`} alt="" />
          </div>
          <div className="card-footer bg-info">
            <h5>{props.dr}</h5>
            <i>{props.pos}</i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teamcard;
