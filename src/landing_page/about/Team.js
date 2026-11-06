import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container p-5 fg-4" style={{ fontSize: "1.1rem" }}>
      <div className="row p-5">
        <h1 className="text-center fs-xl pb-12">People</h1>
        <div className="col-2"></div>
        <div className="col-3 p-5 text-center ">
            <img src="/media/nithinKamath.jpg" alt="nithinKamath img" style={{width:"85%" , }} className="rounded-circle "/>
            <h2 className="fs-lg pt-5">Nithin Kamath</h2>
            <p className="fs-sm pt-4">Founder, CEO</p>
        </div>
        <div className="col-5 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking
            industry.{" "}
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a style={{ textDecoration: "none", color: "#3274b3" }} href="#">
              Homepage
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none", color: "#3274b3" }} href="#">
              TradingQnA
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none", color: "#3274b3" }} href="#">
              Twitter
            </a>
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Team;
