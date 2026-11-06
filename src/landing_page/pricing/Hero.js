import React from "react";
function Hero() {
  return (
    <div className="container text-center p-5 ">
      <div className="d-flex flex-column gap-4">
        <h1 className="fs-xl">Charges</h1>
        <h3 className="fs-lg fg-3">List of all charges and taxes</h3>
      </div>
      <div className="row p-5 mt-12">
        <div className="col-1"></div>
        <div className="col p-5">
          <img src="/media/pricingEquity.svg" style={{ width: "70%" }} />
          <h1 className="fs-2xl pb-5" style={{color:"#302e2e"}}>Free equity delivery</h1>
          <p className="fg-4 " style={{lineHeight:"1.8rem"}}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-5">
          <img src="/media/intradayTrades.svg" style={{ width: "70%" }} />
          <h1 className="fs-2xl pb-5" style={{color:"#302e2e"}}>Intraday and F&O trades</h1>
          <p className="fg-4 " style={{lineHeight:"1.8rem"}}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-5">
          <img src="/media/pricing0.svg" style={{ width: "70%" }} />
          <h1 className="fs-2xl pb-5" style={{color:"#302e2e"}}>Free direct MF</h1>
          <p className="fg-4 " style={{lineHeight:"1.8rem"}}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Hero;
