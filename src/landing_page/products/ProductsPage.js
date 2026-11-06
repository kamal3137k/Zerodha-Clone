import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices."
        image="/media/kite.png"
        playStoreLink=""
        appStoreLink=""
        product1Link="Try demo"
        product2Link="Learn more"
      />

      <RightSection
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        image="/media/console.png"
        productLink="Learn more"
      />
      <LeftSection
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        image="/media/coin.png"
        playStoreLink=""
        appStoreLink=""
        product1Link="Coin"
        product2Link=""
      />
      <RightSection
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        image="/media/kiteconnect.png"
        productLink="Kite Connect"
      />
      <LeftSection
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        image="/media/varsity.png"
        playStoreLink=""
        appStoreLink=""
        product1Link=""
        product2Link=""
      />
      <p className="fs-lg text-center p-12">
        Want to know more about our technology stack? Check out the{" "}
        <a
          href="#"
          style={{ textDecoration: "none", color: "#3274b3" }}
          className=" mx-4"
        >Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
