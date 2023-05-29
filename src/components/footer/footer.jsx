import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

const footer = () => {
  return (
    <section id='footer'>
      <footer>
        <a href='#' className='footer_logo'>
          Mounir
        </a>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#About'>About</a>
          </li>
          <li>
            <a href='#Experience'>Experience</a>
          </li>
          <li>
            <a href='#Services'>Services</a>
          </li>
          <li>
            <a href='#Portfolio'>Projects</a>
          </li>
          <li>
            <a href='#Testimonials'>Testimonials</a>
          </li>
          <li>
            <a href='#Contact'>Contact</a>
          </li>
        </ul>
        <div className='footer__social'>
          <a href='#' target='_blank'>
            <BsLinkedin />
          </a>
          <a href='#' target='_blank'>
            <FaGithubSquare />
          </a>
          <a href='#' target='_blank'>
            <BsYoutube />
          </a>
          <a href='#' target='_blank'>
            <FaTwitterSquare />
          </a>
        </div>
        <div className='copyright'>
          <small>&copy; Rashed</small>
        </div>
      </footer>
    </section>
  );
};

export default footer;
