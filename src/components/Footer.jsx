import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid pt-5 pb-4 bg-info">
        <div className="row">
          <div className="col-lg-6 text-white d-flex justify-content-center">
            <div className="pl-4 text-justify pr-5">
              <h5>About Us</h5>
              <p>
                Smart Eye is a leading provider of information technology,
                consulting, and business process services. Our dedicated
                employees offer strategic insights, technological expertise and
                industry experience.
              </p>
              <p>
                We focus on technologies that promise to reduce costs,
                streamline processes and speed time-to-market, Backed by our
                strong quality processes and rich experience managing global...
              </p>
            </div>
          </div>
          <div className="col-lg-3 text-white d-flex justify-content-lg-center pl-5 ">
            <div>
              <h5>All Links</h5>
              <li>
                <a className="text-white" href="">
                  About us
                </a>
              </li>
              <li>
                <a className="text-white" href="">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-white" href="">
                  Latest Jobs
                </a>
              </li>
              <li>
                <a className="text-white" href="">
                  Gallary
                </a>
              </li>
              <li>
                <a className="text-white" href="">
                  Contact us
                </a>
              </li>
              <div className="text-center mt-2">
                <a className="text-white mr-2">
                  <i cl className="fab fa-facebook	"></i>
                </a>
                <a href="" className="text-white mr-2">
                  <i className="fab fa-twitter-square	"></i>
                </a>
                <a href="" className="text-white mr-2">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-white mr-2">
                  <i className="fab fa-youtube-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-3 text-white d-flex justify-content-lg-center pl-5 mt-4 mt-lg-0">
            <div>
              <h5>Contact Us</h5>
              <h6>BlueDart</h6>
              <h6>Marthandam (kk District)</h6>
              <h6>Phone : +91454565656</h6>
              <h6>Email : info@gmail.com</h6>
              <h6>Web : www.bluedart.in</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
