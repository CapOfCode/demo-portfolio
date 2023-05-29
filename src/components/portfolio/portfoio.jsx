import React from "react";
import "./portfolio.css";
import PortfolioCard from "./portfoliocard";
import Image1 from "../../assets/portfolio1.jpg";
import Image2 from "../../assets/portfolio2.jpg";
import Image3 from "../../assets/portfolio3.jpg";
import Image4 from "../../assets/portfolio4.jpg";
import Image5 from "../../assets/portfolio5.png";
import Image6 from "../../assets/portfolio6.jpg";

const portfoio = () => {
  return (
    <section id='Portfolio'>
      <h5>Work I have Done</h5>
      <h2>Projects</h2>
      <div className='container portfolio__contaiiner'>
        <PortfolioCard pimage={Image1} name='Demo Project One' />
        <PortfolioCard pimage={Image2} name='Demo Project Two' />
        <PortfolioCard pimage={Image3} name='Demo Project Three' />
        <PortfolioCard pimage={Image4} name='Demo Project Four' />
        <PortfolioCard pimage={Image5} name='Demo Project Five' />
        <PortfolioCard pimage={Image6} name='Demo Project Six' />
      </div>
    </section>
  );
};

export default portfoio;
