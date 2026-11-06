import React from "react";
function RightSection({ title, description, image, productLink }) {
  return (
    <div className="container p-5 "  >
      <div className="row p-5">
        <div className="col-1"></div>

        <div
          className="col-4 p-5 d-flex flex-column gap-7"
          style={{ paddingTop: "9rem" }}
        >
          <h1 className="fs-xl fg-4">{title}</h1>
          <p className=" fs-md" style={{ lineHeight: "2rem" }}>
            {description}
          </p>
          <div>
            <a
              href="#"
              style={{ textDecoration: "none", color: "#3274b3" }}
              className="fs-lg mx-4"
            >
              {productLink} <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-5">
          <img src={image} style={{ width: "85%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
