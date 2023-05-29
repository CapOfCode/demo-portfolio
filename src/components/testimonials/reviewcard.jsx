import React from "react";
import "./reviewcard.css";

const reviewcard = (props) => {
  const clientImage = props.image;
  return (
    <div>
      <article className='testimonial'>
        <div className='client_image-div'>
          <img src={clientImage} alt='' className='client_image' />
        </div>
        <h5 className='client-name'>{props.name}</h5>
        <small className='client-review'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti facere totam delectus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Similique, adipisci. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Corrupti facere totam
            delectus.
          </p>
        </small>
      </article>
    </div>
  );
};

export default reviewcard;
