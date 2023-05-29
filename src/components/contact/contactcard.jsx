import React from "react";

const contactcard = (props) => {
  const Conicon = props.icon;
  return (
    <div>
      <div className='contact__card'>
        <Conicon className='contact__icon' />
        <h4>{props.method}</h4>
        <h5 className='username'>{props.content}</h5>
        <a href={props.link}>Send Message</a>
      </div>
    </div>
  );
};

export default contactcard;
