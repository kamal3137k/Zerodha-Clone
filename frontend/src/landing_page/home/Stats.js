import React from "react";
function Stats() {
  return (
    <div className="container mt-12 p-5">
      <div className="row pt-12 p-5">
        <div className="col p-5">
          <h1 className="mb-10 fs-2xl">Trust with confidence</h1>
          <div className="col-9">
            <h2 className="fs-xl">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments.
            </p>
            <h2 className="fs-xl">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h2 className="fs-xl">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h2 className="fs-xl">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col p-5">
            <img src="media/ecosystem.png" style={{width:"75%"}}/>
            <div>
                <a href="#" className="mx-7"  style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                <a href="#" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
