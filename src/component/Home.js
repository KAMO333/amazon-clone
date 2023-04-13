import React from "react";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71u9elzc5uL._SX3000_.jpg"
          alt="Hero"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
