import React from "react";

function Why() {
  return (
    <>
      <div
        className="container pt-5 pb-5"
        id="aboutus"
        style={{ backgroundColor: "" }}
      >
        <h3 className="text-center mb-5">
          <span
            className="p-2"
            style={{ borderBottom: "5px solid #61dafb", borderRadius: "5px" }}
          >
            About Us
          </span>
        </h3>
        <div className="row">
          <div className="col-lg-6">
            <img src="./assets/why.webp" className="h-100 w-100" alt="" />
          </div>
          <div className="col-lg-6">
            <h3 className="mt-lg-4">
              Why choos Health Care with <br />
              <span className="text-info">Medical Hospital</span>
            </h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              neque libero, pulvinar et elementum quis, facilisis eu ante.
              Mauris non placerat sapien. Pellentesque tempor arcu non odio
              scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nam varius eros consequat auctor gravida. Fusce
              tristique lacus at urna sollicitudin pulvinar. Suspendisse
              hendrerit ultrices mauris.
            </p>
            <p className="text-justify">
              Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Sed porta
              dolor quis felis pulvinar dignissim. Etiam nisl ligula,
              ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex
              ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna,
              volutpat vel augue eget, iaculis tristique dui.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Why;
