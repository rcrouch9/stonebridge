import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './pages.css'
import icon from "../assets/contact.png"

export function Contact() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
        "service_rjo3nci",
        "template_tajnrel",
        e.target,
        "Gqzws0m0NVpnkdAth"
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();

  };

  return (

    <body className='body'>
      <div className='main'>
        <div className='contact-box'>
          <img src={icon} className='icon'></img>
          <div className='contact-info'>
            <p>(519) 927-9777</p>
            <p>brian@stonebridgewindoors.com</p>
          </div>
        </div>
      </div>
      <div className='main'>
        <form className="form" onSubmit={sendEmail}>
          <h1>Reach out Today!</h1>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="button" type="submit" value="Send" disabled={isSubmitting} />
          {stateMessage && <p>{stateMessage}</p>}
        </form>
      </div>
    </body>

    );
  }
