import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";

const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente",
    ],
    linkto: ["https//sales.b", "https//sales.m", "https//sales.s"],
    delay: [500, 0, 500],
  };

  const showBoxes = () => {
    return priceState.prices.map((_, i) => (
      <Zoom key={i} className="pricing_item" delay={priceState.delay[i]}>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${priceState.prices[i]}</span>
            <span>{priceState.position[i]}</span>
          </div>
          <div className="pricing_description">{priceState.desc[i]}</div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              style={{ color: "#ffffff" }}
              link={priceState.linkto[i]}
            />
          </div>
        </div>
      </Zoom>
    ));
  };

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
