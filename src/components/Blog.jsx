import React from "react";
import Blogcard from "./Blogcard";
function Blog() {
  return (
    <>
      <div className="container pt-5 pb-4" id="blog">
        <h3 className="text-center">Our Blogs</h3>
        <h5 className="text-center mb-lg-5">
          <span
            className="p-2"
            style={{ borderBottom: "5px solid #61dafb", borderRadius: "5px" }}
          >
            Take a look at some of our key features
          </span>
        </h5>
        <div className="row">
          <Blogcard img="../assets/blog_01.webp"></Blogcard>
          <Blogcard img="../assets/blog_02.webp"></Blogcard>
        </div>
      </div>
    </>
  );
}

export default Blog;
