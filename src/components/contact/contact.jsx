import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Contactcard from "./contactcard";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
const contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x26o3lh",
        "template_o8mrkts",
        form.current,
        "DRNhqloMxqyMyFhwi"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setSuccessMessage("Message Sent");
          } else {
            setSuccessMessage("Error Sending Message");
          }
          e.target.reset();
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        },
        (error) => {
          setSuccessMessage(error.text);
        }
      );
  };

  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <Contactcard
            icon={HiOutlineMail}
            method='Email'
            content='email.demo@gmail.com'
            link='mailto:email.demo@gmail.com'
          />
          <Contactcard
            icon={AiOutlineMessage}
            method='Messenger'
            content='Demo User'
            link='m.me/demo-user'
          />
          <Contactcard
            icon={BsWhatsapp}
            method='Whatsapp'
            content='Demo User'
            link='https://api.whatsapp.com/send?phone=8801738313337'
          />
        </div>
        <div className='contact-form'>
          <form ref={form} onSubmit={sendEmail}>
            <h2 className='contact-text'>Contact Form</h2>
            <input type='text' name='name' placeholder='Your Name' required />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
            />
            <input type='text' name='Subject' placeholder='Subject' />
            <textarea
              name='message'
              id=''
              cols='30'
              rows='7'
              placeholder='Your Message'
              required></textarea>
            <div className='cta-div'>
              <div>
                <button className='btn-contact' type='submit' value='Send'>
                  Send Message
                </button>
              </div>
              <div className='success-message-div'>
                <h5 className='success-message'>{successMessage}</h5>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default contact;
