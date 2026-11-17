import React from "react";
function Hero() {
  return (
    <div
      className="container-fluid fg-white"
      style={{ backgroundColor: "#2b82f3" }}
    >
      <div className="row">
        <div className="col-4 offset-2">
          <h3 className="pt-8 fs-lg">Support Portal</h3>
          <div className="py-11">
            <h1 className="fs-xl">
              {" "}
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              placeholder="Eg: how do i activate F&O, why is my order getting rejected .."
              className="bg-white "
              style={{
                border: "none",
                borderRadius: "10px",
                padding: "20px",
                width: "100%",
                margin: "1rem 0",
              }}
            />
            <div className="d-flex flex-wrap gap-4">
              <a href="" style={{ color: "#eaedd5" }}>
                Track account opening
              </a>
              <a href="" style={{ color: "#eaedd5" }}>
                Track segment activation
              </a>
              <a href="" style={{ color: "#eaedd5" }}>
                Intraday
              </a>
              <a href="" style={{ color: "#eaedd5" }}>
                margins
              </a>
              <a href="" style={{ color: "#eaedd5" }}>
                {" "}
                Kite user manual
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 offset-1">
          {" "}
          <div className="pt-8 d-flex justify-content-end" ><a href="" className="fg-white ">Track Tickets</a></div>
          <div className="py-12 ">
            <h1 className="fs-xl">
              {" "}
              Featured
            </h1>
            <ol>
                <li><a href="" style={{ color: "#eaedd5" }} >Current Takeovers and Delisting - January 2024</a></li>
                <li><a href="" style={{ color: "#eaedd5" }} >Latest Intraday leverages - MIS & CO </a> </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
