import React from "react";

function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white p-3"
        style={{ position: "sticky", top: "0", zIndex: "999" }}
      >
        <div className="ml-lg-5 pl-lg-5">
          <img
            src="./assets/logo.webp"
            style={{ width: "15rem", overlay: "-moz-initial" }}
            className="ml-lg-5 pl-lg-5"
          />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav text-center">
            <li class="nav-item  ml-lg-4 active">
              <a class="nav-link text-bold" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item  ml-lg-4">
              <a class="nav-link text-bold" href="#keyfeatures">
                Services
              </a>
            </li>
            <li class="nav-item  ml-lg-4">
              <a class="nav-link text-bold" href="#aboutus">
                About Us
              </a>
            </li>
            <li class="nav-item  ml-lg-4">
              <a class="nav-link text-bold" href="#blog">
                Blog
              </a>
            </li>
            <li class="nav-item  ml-lg-4">
              <a class="nav-link text-bold" href="#gallary">
                Gallery
              </a>
            </li>
            <li class="nav-item  ml-lg-4">
              <a class="nav-link text-bold" href="#contactus">
                Contact Us
              </a>
            </li>{" "}
            <li class="nav-item  ml-lg-4">
              <a class="btn btn-info text-bold" href="#">
                Book an Appointment
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
