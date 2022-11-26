import React from "react";

const CountDown = () => {
  return (
    <div className="   lg:artboard artboard-horizontal phone-1 lg:shadow-2xl lg:mx-auto">
      <div className="text-center mt-20">
        <h1 className="lg:text-3xl text-2xl text-cyan-500 font-bold">
          Our Flash Sale Offer Will End Soon...
        </h1>
        <h3 className="lg:text-xl  text-primary font-bold mt-4">
          Order Now To Get The Offet
        </h3>
      </div>
      <div className="grid grid-flow-col gap-5 text-center  hero-content mt-6   auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown lg:font-mono text-5xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 48 }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default CountDown;
