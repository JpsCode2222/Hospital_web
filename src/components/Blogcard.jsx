import React from "react";

function Blogcard(props) {
  return (
    <>
      <div className="col-lg-6">
        <div className="card shadow mt-5">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4 w-100">
                <img src={`${props.img}`} className="w-100 h-100" alt="" />
              </div>
              <div className="col-lg-8">
                <h5>Why Primary treatment is important ?</h5>
                <p>
                  <i className="fa fa-user"></i> Admin &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-eye"></i> (12) &nbsp;&nbsp;&nbsp;
                  <i className="fa fa-comments"></i> (12)
                </p>
                <p>
                  Lorem Ipsum, type lorem then press the shortcut. The default
                  keyboard shortcut is the same keyboard shortcut is the
                </p>
                <a href="#">Read more...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogcard;
