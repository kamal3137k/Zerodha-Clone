import React from "react";
function Brokerage() {
  return (
    <div className="container p-5 my-12 ">
      <div className="row p-5">
        <h3 className="col-7 text-center fs-lg" style={{color:"#4486cd"}}>Brokerage calculator</h3>
        <h3 className="col-4 text-center fs-lg"  style={{color:"#4486cd"}}>List of charges</h3>
      </div>
      <div className="row p-7">
        <ul className="mx-5 fg-4 d-flex flex-column gap-4" style={{marginLeft:"4rem"}} >
          <li>
            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST
            per order.
          </li>
          <li>Digital contract notes will be sent via e-mail.</li>
          <li>
            Physical copies of contract notes, if required, shall be charged ₹20
            per contract note. Courier charges apply.
          </li>
          <li>
            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
            equity (whichever is lower).
          </li>
          <li>
            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Brokerage;
