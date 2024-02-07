import React from "react";

function Contactus() {
  return (
    <>
      <div className="container mt-5 mb-5" id="contactus">
        <h3 className="text-center pb-5">
          <span
            className="p-2"
            style={{ borderBottom: "5px solid #61dafb", borderRadius: "5px" }}
          >
            Contact Us
          </span>
        </h3>
        <div className="row mt-4">
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156077!2d73.78056543154413!3d18.524598599502376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707229403933!5m2!1sen!2sin"
              width="100%"
              height="550"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-lg-6">
            Enter Name :
            <input type="text" className="form-control" />
            <br />
            Enter Email :
            <input type="text" className="form-control" />
            <br />
            Enter Mobile :
            <input type="text" className="form-control" />
            <br />
            Message :
            <textarea
              className="form-control"
              cols="30"
              rows="8"
            ></textarea>{" "}
            <br />
            <button className="btn btn-info">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
