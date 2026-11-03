import React from "react";
function Pricing() {
  return (
    <div className="container mt-10 p-5">
      <div className="row p-5">
        <div className="col-4 p-5">
          <h1 className="mb-5 fs-2xl">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-5">
          <div className="row text-center">
            <div className="col border p-6 border-end-0 ">
              <h1 className="pb-5">₹0</h1>
              <p>Free equity delivery and<br/>direct mutual funds</p>
            </div>
            <div className="col border p-6">
              <h1 className="pb-5">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
