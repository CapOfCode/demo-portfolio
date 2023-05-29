import React from "react";
import "./header.css";
import CV from "../../assets/cv.pdf";
import ME from "../../assets/avatar3.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

const Header = () => {
  return (
    <section>
      <header>
        {/* Header Content */}
        <div className='container header__container'>
          {/* Header Image */}

          <div className='me'>
            <img src={ME} alt='' className='header-image' />
          </div>

          <h4>Hello, I'am</h4>
          <h1 className='head-name'>Mounir</h1>
          <h5 className='title'>Fullstack Developer</h5>

          {/* CTA Button */}
          <div className='cta'>
            <a href={CV} download className='btn'>
              Download CV
            </a>
            <a href='#Contact' className='btn btn-primary'>
              Let's Talk
            </a>
          </div>

          {/* Social Icons */}
          <div className='header__socials'>
            <a href='##' target='_blank'>
              <BsLinkedin />
            </a>
            <a href='##' target='_blank'>
              <FaGithubSquare />
            </a>
            <a href='##' target='_blank'>
              <BsYoutube />
            </a>
            <a href='##' target='_blank'>
              <FaTwitterSquare />
            </a>
          </div>

          <a href='' className='scroll__down'>
            Scrol Down
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
