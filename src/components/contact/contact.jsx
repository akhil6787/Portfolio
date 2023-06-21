import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  
  return (
    <section id='contact'>
      <center><h5>Get In Touch</h5></center>
      <center><h1>Contact Me</h1></center>
      <div className="container contact__container">
        <div className="contact__option">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>stompingkarkaen@gmail</h5>
            <a href='mailto: akhil1138.be20@chitkarauniversity.edu.in'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Instagram</h5>
            <a href='#'>Send a message</a>
          </article>


          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+916283879727</h5>
            <a href='https://wa.me/916283879727'>Send a message</a>
          </article>


        </div>
        {/* END OF CONTACT OPTION*/}
        <form>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact


{/* to send email we use emailjs.com so we cannot create str of our mail........then instal using npm install emailjs-com --save*/}