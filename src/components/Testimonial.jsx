import React from "react";
import Testimonialcard from "./Testimonialcard";

function Testimonial() {
  return (
    <>
      <div className="container pt-5 pb-4">
        <h3 className="text-center">Testimonials</h3>
        <h5 className="text-center mb-5">
          <span
            className="p-2"
            style={{ borderBottom: "5px solid #61dafb", borderRadius: "5px" }}
          >
            Our Patients Feedbacks
          </span>
        </h5>
        <div className="row">
          <Testimonialcard></Testimonialcard>
          <Testimonialcard></Testimonialcard>
          <Testimonialcard></Testimonialcard>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
