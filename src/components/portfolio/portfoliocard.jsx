import React from "react";
import "./portfoliocard.css";

const portfoliocard = (props) => {
  const portfolioImage = props.pimage;
  return (
    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
        <img src={portfolioImage} alt='' className='portfolio__item-image' />
      </div>
      <p>{props.name}</p>
      <div className='portfolio__cta'>
        <a href='##' className='btn btn-primary'>
          Source Code
        </a>
        <a href='##' className='btn btn-primary'>
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default portfoliocard;
