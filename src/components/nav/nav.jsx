import React, { useState } from "react";

import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";

const nav = () => {
  const [activeNow, setActiveNow] = useState("#");

  return (
    <nav>
      <a
        href='#'
        className={activeNow === "#" ? "active" : ""}
        onClick={() => {
          setActiveNow("#");
        }}>
        <AiOutlineHome />
      </a>
      <a
        href='#About'
        onClick={() => {
          setActiveNow("#About");
        }}
        className={activeNow === "#About" ? "active" : ""}>
        <BiUserCircle />
      </a>
      <a
        href='#Experience'
        className={activeNow === "#Experience" ? "active" : ""}
        onClick={() => {
          setActiveNow("#Experience");
        }}>
        <BsFillJournalBookmarkFill />
      </a>
      <a
        href='#Services'
        className={activeNow === "#Services" ? "active" : ""}
        onClick={() => {
          setActiveNow("#Services");
        }}>
        <MdDesignServices />
      </a>
      <a
        href='#Portfolio'
        className={activeNow === "#Portfolio" ? "active" : ""}
        onClick={() => {
          setActiveNow("#Portfolio");
        }}>
        <MdWorkHistory />
      </a>

      <a
        href='#Contact'
        className={activeNow === "#Contact" ? "active" : ""}
        onClick={() => {
          setActiveNow("#Contact");
        }}>
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default nav;
