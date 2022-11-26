import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import CountDown from "./CountDown";
import Footer from "./Footer";
import Products from "./Products";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Summary></Summary>
      <Reviews></Reviews>
      <CountDown></CountDown>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
