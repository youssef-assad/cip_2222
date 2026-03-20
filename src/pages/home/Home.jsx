import React from "react";
import "./home.css";
import Banner from "../../components/banner/Banner";
import Secteur from "./Secteur";
function Home() {
  return (
    <div>
      <Banner />
      <div className="container">
        <Secteur />
      </div>
    </div>
  );
}

export default Home;
