import React from "react";
import Gallarycard from "./Gallarycard";

function Gallary() {
  return (
    <>
      <div className="container mt-4 mb-4" id="gallary">
        <h3 className="text-center">
          <span
            className="p-2"
            style={{ borderBottom: "5px solid #61dafb", borderRadius: "5px" }}
          >
            Gallery
          </span>
        </h3>
        <div className="row">
          <Gallarycard img="../assets/gallery_01.webp"></Gallarycard>
          <Gallarycard img="../assets/gallery_02.webp"></Gallarycard>
          <Gallarycard img="../assets/gallery_03.webp"></Gallarycard>
          <Gallarycard img="../assets/gallery_04.webp"></Gallarycard>
          <Gallarycard img="../assets/gallery_05.webp"></Gallarycard>
          <Gallarycard img="../assets/gallery_06.webp"></Gallarycard>
        </div>
      </div>
    </>
  );
}

export default Gallary;
