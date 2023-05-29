import React from "react";
import "./experience.css";
import Skills from "./skills";

const experience = () => {
  return (
    <section id='Experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='frontend_skills'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <Skills skill='HTML' levels='Intermidiate' />
            <Skills skill='CSS' levels='Begainer' />
            <Skills skill='JavaScript' levels='Advance' />
            <Skills skill='HTML' levels='Intermidiate' />
            <Skills skill='HTML' levels='Intermidiate' />
            <Skills skill='HTML' levels='Intermidiate' />
            <Skills skill='HTML' levels='Intermidiate' />
          </div>
        </div>
        <div className='backend_skills'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <Skills skill='HTML' levels='Intermidiate' />
            <Skills skill='HTML' levels='Intermidiate' />
            <Skills skill='HTML' levels='Intermidiate' />
            <Skills skill='HTML' levels='Intermidiate' />
            <Skills skill='HTML' levels='Intermidiate' />
            <Skills skill='HTML' levels='Intermidiate' />
            <Skills skill='HTML' levels='Intermidiate' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
