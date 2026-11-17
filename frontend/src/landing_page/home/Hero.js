import React from "react";
function Hero() {
  return (
    <div className="container  text-center p-5 ">
      <div className="row mb-12 justify-content-center">
        <img
          src="media/homeHero.png"
          alt="Hero img"
          style={{ width: "60%", height: "auto" }}
        />
      </div>
      <div className="row mb-3 ">
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, IPOs, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>
      </div>
      <div className="mb-12">
        <button className="btn-solid theme-primary fs-lg px-6 " type="button">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
