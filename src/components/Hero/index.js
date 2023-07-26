import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./index.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Fİnd the perfect place</h1>
        <div className="search-text">
          <p>
            Search the largest selection of luxury high-rise apartments and
            luxury homes
          </p>
          <form action="" className="search">
            <input type="text" placeholder="Enter Keyword" />
            <div className="radio">
              <input type="radio" name="radio" id="buy" />
              <label htmlFor="buy">Buy</label>
              <input type="radio" name="radio" id="rent" checked />
              <label htmlFor="rent">Rent</label>
              <button type="submit">
                <AiOutlineSearch className="icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
