import React from "react";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="product_row">
        <Product
          id="1"
          title=" Microsoft Xbox One X 1TB, 4K Ultra HD Gaming Console, Black (Renewed)
          (2017 Model)"
          image="https://m.media-amazon.com/images/I/61JGKhqxHxL._AC_UL320_.jpg"
          rating={4}
          price={375.95}
        />

        <Product
          id="2"
          title="Hisense 55-Inch Class R6 Series Dolby Vision HDR 4K UHD Roku Smart TV with Alexa Compatibility (55R6G, 2021 Model)"
          image="https://m.media-amazon.com/images/I/71RshxhlEiL._AC_UL320_.jpg"
          rating={5}
          price={565.90}
        />
      </div>
      <div className="product_row">
        <Product
          id="3"
          title="Fire TV Gaming Bundle with Fire TV Stick 4K Max and Luna Controller"
          image="https://m.media-amazon.com/images/I/51frTZDh4DL._AC_UY218_.jpg"
          rating={5}
          price={24.95}
        />

        <Product
          id="4"
          title="VIZIO V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible, Includes Remote Control - V51x-J6"
          image="https://m.media-amazon.com/images/I/51d5Rc6DNML._AC_UY218_.jpg"
          rating={4}
          price={125.99}
        />

        <Product
          id="5"
          title="
          Roku Ultra LT 4K/HDR/HD Streaming Player with Enhanced Voice Remote, Ethernet, MicroSD with Premium 6FT 4K Ready HDMI Cable"
          image="https://m.media-amazon.com/images/I/61JR-sPCrmL._AC_UY218_.jpg"
          rating={4}
          price={55.95}
        />
      </div>

      <div className="product_row">
      <Product
          id="6"
          title="
          Sonos Amp - The Versatile Amplifier for Powering All Your Entertainment - Black"
          image="https://m.media-amazon.com/images/I/416dlhw-YnL._AC_UY218_.jpg"
          rating={3}
          price={59.95}
        />
      </div>
    </>
  );
};

export default Products;
