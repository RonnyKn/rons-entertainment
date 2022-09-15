import './Message.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Message = () => {

  const form = useRef();
  const [isDone, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2y24t5g', 'template_2gpy8ly', form.current, '8sH3i4bVXXbpdpkfh')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  };
  if (isDone === true) {
    window.alert("Thankyou for your feedback. \nHave a nice day ❤.");
    window.location.reload();

  }

  return (
    <>
      <span className='page-title'>Message Me..</span>
      <p className='page-subTitle'><em>..if you're like this website or some ideas/features that can improve website.❤ </em></p>
      <div className='message'>
        <form ref={form} className='message-form' onSubmit={sendEmail}>
          <label>Name :</label>
          <input type="text" name='user_name' placeholder='ex: Cahyonoo' className='user' id='user_name' required />
          <label>E-mail:</label>
          <input type="email" name='user_email' placeholder='Cahyono@gmail.com' className='user' required ></input>
          <label >Message:</label>
          <textarea name="message" id="" cols="30" rows="10" placeholder='message..' className='user' required ></textarea>
          <input type="submit" value="Send" className='button send-button' />
        </form>
      </div>
    </>
  )
}
export default Message;