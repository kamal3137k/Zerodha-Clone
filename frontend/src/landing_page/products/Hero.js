import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container ">
      <div className="row text-center d-flex gap-6">
        <h1 className="fs-xl " style={{ color: "#403f3f" }}>
          Zerodha Products
        </h1>
        <h2 className="fs-lg fg-4">
          Sleek, modern, and intuitive trading platforms
        </h2>
        <p>
          Check out our{" "}
          <Link to="#" style={{ textDecoration: "none", color: "#3274b3" }}>
            investment offerings →
          </Link>{" "}
        </p>
      </div>
      <div
        className="border-bottom mb-12  mx-auto"
        style={{ borderColor: "lightGrey", width: "78%", marginTop: "50px" }}
      ></div>
    </div>
  );
}

export default Hero;
