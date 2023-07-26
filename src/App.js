import React from "react";
import Best from "./components/Best";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
};

export default App;
