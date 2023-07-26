import React from "react";
import "./index.css";
import house1 from "../../assets/house1.jpg";
import bed1 from "../../assets/bed1.jpg";
import bed2 from "../../assets/bed2.jpg";
import kitchen from "../../assets/kitchen.jpg";
import bathroom from "../../assets/bath1.jpg";
import house2 from "../../assets/house2.jpg";
import bed3 from "../../assets/bed3.jpg";
import bed4 from "../../assets/bed4.jpg";
import livingroom from "../../assets/living-room.jpg";
import bathroom2 from "../../assets/bath2.jpg";
const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Featured Listings</h1>
      <p className="featured-text">
        Selected listings by City,State & Zip based on views
      </p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src={house1} alt="" />
        <img src={bed1} alt="" />
        <img src={bed2} alt="" />
        <img src={kitchen} alt="" />
        <img src={bathroom} alt="" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>123 St. </h2>
            <p>House for Sale</p>
            <p className="price">$111.111</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>2</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet::</p>
                <p>8,123</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$12,222/mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur quis tempore, dignissimos explicabo, itaque
            necessitatibus non amet nam, aliquid aliquam beatae asperiores!
          </p>
          <button className="btn">View Details</button>
        </div>
      </div>
      <div className="container">
        <img className="order-2" src={bed3} alt="" />
        <img src={bed4} alt="" className="order-3" />
        <img src={house2} alt="" className="span-3 image-grid-row-2 order-1" />
        <img src={livingroom} alt="" className="order-4" />
        <img src={bathroom2} alt="" className="order-5" />
        <div className="span-2 right-img-details order-7">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur quis tempore, dignissimos explicabo, itaque
            necessitatibus non amet nam, aliquid aliquam beatae asperiores!
          </p>
          <button className="btn">View Details</button>
        </div>
        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>123 St. </h2>
            <p>House for Sale</p>
            <p className="price">$111.111</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>2</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet::</p>
                <p>8,123</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$12,222/mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
