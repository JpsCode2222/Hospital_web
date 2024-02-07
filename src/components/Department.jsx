import React from "react";
import Departmentcard from "./Departmentcard";

function Department() {
  return (
    <>
      <div className="container pt-lg-5 pb-4" id="department">
        <h3 className="text-center">
          {" "}
          <span
            className="p-2"
            style={{ borderBottom: "5px solid #61dafb", borderRadius: "5px" }}
          >
            All Departments
          </span>
        </h3>
        <div className="row">
          <Departmentcard
            icon="fa fa-brain"
            title="Neurology"
            desc="Treatment perfectly match your goals."
          ></Departmentcard>
          <Departmentcard
            icon="fa fa-heart-pulse"
            title="Cardiology"
            desc="Treatment perfectly match your goals."
          ></Departmentcard>
          <Departmentcard
            icon="fa fa-lungs"
            title="Pulmonary"
            desc="Treatment perfectly match your goals."
          ></Departmentcard>
          <Departmentcard
            icon="fa fa-person-breastfeeding"
            title="Births"
            desc="Treatment perfectly match your goals."
          ></Departmentcard>
        </div>
      </div>
    </>
  );
}

export default Department;
