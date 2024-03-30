import React from "react";

function Container3() {
  return (
    <>
      <div className="fullwidth-col-img ">
        <div className="fullwidth-col-img--item" id="image1">
          <div className="fullwidth-col-img--item-bg "></div>
          <div className="fullwidth-col-img--item-inner ">
            <h3>CROP SUGGESTIONS</h3>
            <div
              className="fullwidth-col-img--item-desc "
              style={{ fontSize: "15px" }}
            >
              This page will suggest the best crops and their detailed
              information according to the given input.
            </div>
          </div>
        </div>

        <div className="fullwidth-col-img--item" id="image4">
          <div className="fullwidth-col-img--item-bg "></div>
          <div className="fullwidth-col-img--item-inner ">
            <h3>DISCUSSIONS</h3>
            <div
              className="fullwidth-col-img--item-desc "
              style={{ fontSize: "15px" }}
            >
              Discussions tab helps to unite all the farmers for the query
              solving among each other
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container3;
