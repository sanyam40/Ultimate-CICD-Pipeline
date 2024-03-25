import React from "react";
import "../Components/resources/style.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Products from "../Components/Products";

const HomePage = () => {
  return (
    <div>
      <div>
        <Header />
        <section className="main-home">
          <div className="down-arrow">
            <a href="#trending" className="down">
              <i className="bx bx-down-arrow-alt"></i>
            </a>
          </div>
        </section>
        <Products />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
