import React from "react";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col items-stretch md:flex-row-reverse lg:flex-row-reverse">
        <img
          src={banner}
          alt=""
          className="lg:w-2/5 md:w-2/5 rounded-lg lg:ml-10 shadow-2xl"
        />
        <div className="lg-w-2/5 text-center mt-4 lg:mr-10 lg:0">
          <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold">
            Your New Smile Start Here.
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="lg:btn md:btn btn btn-sm btn-primary upercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
