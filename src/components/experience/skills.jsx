import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const skills = (props) => {
  return (
    <div>
      <article className='experience__details'>
        <BsFillPatchCheckFill />
        <div>
          <h4>{props.skill}</h4>
          <small className='text-light'>{props.levels}</small>
        </div>
      </article>
    </div>
  );
};

export default skills;
