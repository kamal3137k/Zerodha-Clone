import React from "react";
function Universe() {
  return (
    <div className="container text-center p-5 ">
      <div className="fg-4 mb-6">
        <h1 className="fs-xl pb-5">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row d-flex gap-12 p-5">
        <div className="col"></div>
        <div className="col p-5 ">
          <img
            src="\media\zerodhaFundhouse.png"
            style={{ width: "90%" }}
            className="pb-4"
          />
          <p>
            <a
              href=""
              style={{ textDecoration: "none" }}
              className="fg-3 fs-sm "
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </a>
          </p>
        </div>
        <div className="col p-7">
          <img
            src="\media\sensibullLogo.svg"
            style={{ width: "90%" }}
            className="pb-5"
          />

          <p>
            <a
              href=""
              style={{ textDecoration: "none" }}
              className="fg-3 fs-sm"
            >
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </a>
          </p>
        </div>
        <div className="col p-5">
          <img
            src="\media\tijori.svg"
            style={{ width: "90%" }}
            className="pb-4"
          />

          <p>
            <a
              href=""
              style={{ textDecoration: "none" }}
              className="fg-3 fs-sm"
            >
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </a>
          </p>
        </div>
        <div className="col"></div>
      </div>
      <div className="row d-flex gap-12 p-5">
        <div className="col"></div>
        <div className="col p-5 ">
          <img
            src="\media\streakLogo.png"
            style={{ width: "90%" }}
            className="pb-4"
          />
          <p>
            <a
              href=""
              style={{ textDecoration: "none" }}
              className="fg-3 fs-sm "
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </a>
          </p>
        </div>
        <div className="col p-7">
          <img
            src="\media\smallcaseLogo.png"
            style={{ width: "90%" }}
            className="pb-5"
          />

          <p>
            <a
              href=""
              style={{ textDecoration: "none" }}
              className="fg-3 fs-sm"
            >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </a>
          </p>
        </div>
        <div className="col p-5">
          <img
            src="\media\dittoLogo.png"
            style={{ width: "90%" }}
            className="pb-4"
          />

          <p>
            <a
              href=""
              style={{ textDecoration: "none" }}
              className="fg-3 fs-sm"
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling. 
            </a>
          </p>
        </div>
        <div className="col"></div>

      </div>
      <button className="btn-solid theme-primary  fs-lg px-6 " type="button">
          Sign up now
        </button>
    </div>
  );
}

export default Universe;
