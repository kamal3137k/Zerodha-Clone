import React from "react";
function Awards() {
  return (
    <div className="container mt-12 p-5">
      <div className="row p-5">
        <div className="col p-5">
          <img src="/media/largestBroker.svg" alt="largestBroker img" />
        </div>
        <div className="col pt-7 p-5">
          <h1>Largest stock broker in India</h1>
          <p className="mt-3">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-11">
            <div className="col">
              <ul>
                <li>
                    <p>Futures and Options</p>
                </li>
                <li>
                    <p>Commodity derivatives</p>
                </li>
                <li>
                    <p>Currency derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col">
              <ul>
                <li>
                    <p>Stocks & IPOs</p>
                </li>
                <li>
                    <p>Direct mutual funds</p>
                </li>
                <li>
                    <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <img src="/media/pressLogos.png" alt="pressLogo" style={{width:"87%"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
