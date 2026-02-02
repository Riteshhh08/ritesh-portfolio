import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

const WEB3FORMS_ACCESS_KEY = '9f37fc21-ad4f-4a44-9e7a-a4a60caea8d6';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidName = name.trim() !== '';
    const isValidEmail = email.trim() !== '';
    const isValidMessage = message.trim() !== '';

    setNameError(!isValidName);
    setEmailError(!isValidEmail);
    setMessageError(!isValidMessage);

    if (!isValidName || !isValidEmail || !isValidMessage) {
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Reach out at <a href="mailto:riteshvishwakarma.work@gmail.com">riteshvishwakarma.work@gmail.com</a> or +91 9044942437 — let's collaborate!</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={onSubmit}
          >
            <div className="form-flex">
              <TextField
                required
                name="name"
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                disabled={status === 'sending'}
              />
              <TextField
                required
                name="email"
                id="contact-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
                disabled={status === 'sending'}
              />
            </div>
            <TextField
              required
              name="message"
              id="contact-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              disabled={status === 'sending'}
            />
            {status === 'success' && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Success! Your message has been sent.
              </Alert>
            )}
            {status === 'error' && (
              <Alert severity="error" sx={{ mb: 2 }} onClose={() => setStatus('idle')}>
                {errorMessage}
              </Alert>
            )}
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send'}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;