import React from "react";

function Gallarycard(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mt-4 Gallary_card">
          <div className="card-body p-0 ">
            <img
              src={`${props.img}`}
              className="h-100 w-100 gallary_Img"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallarycard;
