import React from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/header";
import Footer from "./components/header_footer/footer";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venuenfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
