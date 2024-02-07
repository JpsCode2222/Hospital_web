import React from "react";
import Featurecard from "./Featurecard";

function Feature() {
  return (
    <>
      <div className="container pt-5 pb-4">
        <h3 className="text-center" id="keyfeatures">
          Our Key Features
        </h3>
        <h5 className="text-center mb-5">
          <span
            className="p-2"
            style={{ borderBottom: "5px solid #61dafb", borderRadius: "5px" }}
          >
            Take a look at some of our key features
          </span>
        </h5>
        <div className="row">
          <Featurecard
            icon="fa fa-building"
            title="Newest Technologies"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit."
          ></Featurecard>
          <Featurecard
            icon="fa-solid fa-hospital-user"
            title="High Quality treatments"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit."
          ></Featurecard>
          <Featurecard
            icon="fa fa-users"
            title="Pharma Team"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit."
          ></Featurecard>
          <Featurecard
            icon="fa-solid fa-house-medical-circle-check"
            title="Pharma Pipeline
            "
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit."
          ></Featurecard>
          <Featurecard
            icon="fa-solid fa-user-nurse"
            title="High Customer Satisfaction"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit."
          ></Featurecard>
          <Featurecard
            icon="fa fa-user-doctor"
            title="Experianced Doctors"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit."
          ></Featurecard>
        </div>
      </div>
    </>
  );
}

export default Feature;
