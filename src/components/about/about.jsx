import React from "react";
import Card from "./cards";
import image from "../../assets/avatar2.jpg";
import "./about.css";
import { GiAchievement } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";

const about = () => {
  return (
    <section className='about-section' id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='image-div'>
            <img src={image} alt='' className='about__me_image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about-cards'>
            <Card icon={GiAchievement} title='Experience' des='3 + Years' />
            <Card icon={FaUserFriends} title='Clients' des='200+ Worldwide' />
            <Card
              icon={BsFileEarmarkPost}
              title='Projects'
              des='80+ Completed'
            />
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <a href='#Contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
