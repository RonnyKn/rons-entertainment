import './Message.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, createTheme, IconButton, TextareaAutosize, TextField, ThemeProvider } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import IGIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

const Message = () => {

  const formRef = useRef();

   const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_2y24t5g',
        'template_2gpy8ly',
        formRef.current,
        '8sH3i4bVXXbpdpkfh'
      );
      alert("Thank you, your message has been sent successfully.\nHave a great day ❤");
      e.target.reset();
    } catch (error) {
      console.error("Email sending failed:", error);  
      alert("Oops! Something went wrong. Please try again.");
    }
  };

    const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#fff' },
      secondary: { main: '#293349' }
    }
  });

  return (
    <>
      <span className='page-title'>Message Me..</span>
      <ThemeProvider theme={darkTheme}>
        <div className='message'>
          <form ref={formRef} className='message-form' onSubmit={sendEmail}>
            <TextField
              type='text'
              name='user_name'
              placeholder='ex:Aliandoo'
              className='user'
              id='user_name'
              label='Name'
              required
            />
            <TextField
              type='email'
              name='user_email'
              placeholder='Aliandoo@gmail.com'
              className='user'
              label='E-mail'
              required
            />
            <TextareaAutosize
              aria-label="maximum height"
              name='message'
              placeholder='tell me something about this website?'
              className='user'
              minRows={3}
              required
              style={{ width: '100%', padding: '5px', borderRadius: '5px', backgroundColor: ' #293349', color: '#fff' }}
            />
            <Button
              variant='contained'
              type='submit'
              color='secondary'
              style={{ margin: '10px auto 5px auto', width: '50%', border: "1px solid white" }}
            >
              Send <SendIcon />
            </Button>
          </form>
        </div>
        <p style={{ textAlign: 'center', fontSize: '10px', margin: '1rem  auto' }}>Find me here:</p>
        <div className='message-footer'>
          <IconButton style={{ transform: 'scale(1.8)' }} href='https://www.instagram.com/ronny.kn/' target='__blank'>
            <IGIcon />
          </IconButton>
          <IconButton style={{ transform: 'scale(1.8)' }} href='https://www.twitter.com/ronny_kn/' target='__blank'>
            <TwitterIcon />
          </IconButton>
        </div>
      </ThemeProvider>
    </>
  )
}
export default Message;