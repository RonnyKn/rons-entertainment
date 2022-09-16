import './Message.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, createTheme, TextareaAutosize, TextField, ThemeProvider } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

const Message = () => {

  const form = useRef();
  const [isDone, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2y24t5g', 'template_2gpy8ly', form.current, '8sH3i4bVXXbpdpkfh')
      .then((result) => {
        // console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  };
  if (isDone === true) {
    window.alert("Thankyou for your feedback. \nHope you have a great day ❤.");
    window.location.reload();
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#fff'
      },
      secondary: {
        main: '#293349'
      }
    }
  })

  return (
    <>
      <span className='page-title'>Message Me..</span>
      <p className='page-subTitle'><em>..if you're have some ideas or features that can improve website.❤ </em></p>
      <ThemeProvider theme={darkTheme}>
        <div className='message'>
          <form ref={form} className='message-form' onSubmit={sendEmail}>
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
              style={{ width: 400, padding: '5px', borderRadius: '5px' }}
            />
            <Button
              variant='contained'
              type='submit'
              color='secondary'
              style={{ margin: '20px auto', width: '150px', border: "1px solid white" }}
            >
              Send <SendIcon />
            </Button>
          </form>
        </div>
      </ThemeProvider>
    </>
  )
}
export default Message;