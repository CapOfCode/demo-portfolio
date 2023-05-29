import React from "react";

const cards = (props) => {
  const Icon = props.icon;
  return (
    <div className='about-card'>
      <Icon className='about__icon' />
      <h5>{props.title}</h5>
      <small>{props.des}</small>
    </div>
  );
};

export default cards;
