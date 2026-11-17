import React from "react";

function CreateTicket() {
  return (
    <div className="container p-5">
      <h1 className="px-10 py-6 fs-2xl" style={{ color: "#2c2a2a" }}>
        To create a ticket, select a relevant topic
      </h1>
      <div className="row p-5">
        ""
        <div className="col p-5">
          <h3 className="fs-lg mb-8 " style={{ color: "#3b3939" }}>
            <i className="fa-solid fa-circle-plus fs-sm my-auto"></i> Account
            Opening
          </h3>
          <div className="d-flex flex-column gap-5 ">
            {" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Online Account Opening
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Offline Account Opening
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Company, Partnership and HUF Account Opening
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              NRI Account Opening
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Charges at Zerodha
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Zerodha IDFC FIRST Bank 3-in-1 Account
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Getting Started
            </a>
          </div>
        </div>
        <div className="col p-5">
          <h3 className="fs-lg mb-8 " style={{ color: "#3b3939" }}>
            <i className="fa-solid fa-user fs-sm"></i> Your Zerodha Account
          </h3>
          <div className="d-flex flex-column gap-5 ">
            {" "}
            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              Login Credentials
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Account Modification and Segment Addition
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              DP ID and bank details
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Your Profile
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Transfer and conversion of shares
            </a>
          </div>
        </div>
        <div className="col p-5">
          <h3 className="fs-lg mb-8 " style={{ color: "#3b3939" }}>
            <i className="fa-solid fa-chart-column fs-sm"></i> Your Zerodha
            Account
          </h3>
          <div className="d-flex flex-column gap-5 ">
            {" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Margin/leverage, Product and Order types
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Kite Web and Mobile
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Trading FAQs
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Corporate Actions
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Sentinel
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Kite API
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Pi and other platforms
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Stockreports+
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              GTT{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="row p-5">
        ""
        <div className="col p-5">
          <h3 className="fs-lg mb-8 " style={{ color: "#3b3939" }}>
            <i className="fa-solid fa-wallet fs-sm my-auto"></i> Funds
          </h3>
          <div className="d-flex flex-column gap-5 ">
            {" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Adding Funds
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Fund Withdrawal
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              eMandates
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Adding Bank Accounts
            </a>
          </div>
        </div>
        <div className="col p-5">
          <h3 className="fs-lg mb-8 " style={{ color: "#3b3939" }}>
            <i className="fa-solid fa-circle-notch fs-sm"></i> Console
          </h3>
          <div className="d-flex flex-column gap-5 ">
            {" "}
            <a href="#" style={{ textDecoration: "none" }} >
              {" "}
              Reports
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Ledger
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Portfolio
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              60 Day Challenge
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              IPO
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Referral Program
            </a>
          </div>
        </div>
        <div className="col p-5">
          <h3 className="fs-lg mb-8 " style={{ color: "#3b3939" }}>
            <i className="fa-regular fa-circle fs-sm"></i> Coin
          </h3>
          <div className="d-flex flex-column gap-5 ">
            {" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Understanding Mutual Funds
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              About Coin
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Buying and Selling through Coin
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Starting an SIP
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Managing your Portfolio
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Coin App
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Moving to Coin
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Government Securities
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateTicket;
