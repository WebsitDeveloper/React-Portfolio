import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n574vjq', 'template_hdzgybn', form.current, 'CEthTHPQQmWExGupc')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5> Get In Touch </h5>
      <h2> Contact Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4> Email </h4>
            <h5> hafizhamzawaheed@gmail.com </h5>
            <a href="mailto:hafizhamzawaheed@gmail.com" target="__blank"> Send a message </a>
          </article>
          <article className="contact__option">
          <BsLinkedin className='contact__option-icon'/>
            <h4> LinkedIn </h4>
            <h5> Hamza Waheed </h5>
            <a href="https://m.me/profile.php?id=100015097293052" target="__blank"> Send a message </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4> WhatsApp </h4>
            <h5> +1234567890 </h5>
            <a href="https://api.whatsapp.com/send?phone=+923037741172" target="__blank"> Send a message </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className="btn btn-primary"> Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

// ref={form} onSubmit={sendEmail}