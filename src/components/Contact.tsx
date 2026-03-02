import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [honeypot, setHoneypot] = useState<string>(''); // spam trap
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidName = name.trim() !== '';
    const isValidEmail = emailRegex.test(email.trim());
    const isValidMessage = message.trim() !== '';

    setNameError(!isValidName);
    setEmailError(!isValidEmail);
    setMessageError(!isValidMessage);

    if (!isValidName || !isValidEmail || !isValidMessage) {
      return;
    }

    // Honeypot check – if filled, silently drop (likely a bot)
    if (honeypot.trim().length > 0) {
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setHoneypot('');
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error');
      setErrorMessage('Contact form email is not configured yet. Please reach out directly via email.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          subject: subject || '(No subject)',
          message,
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setHoneypot('');
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong while sending your message. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong while sending your message. Please try again.');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>

          <p>
            Reach out at{' '}
            <a href="mailto:riteshvishwakarma.work@gmail.com">
              riteshvishwakarma.work@gmail.com
            </a>{' '}
            or +91 9044942437 — let's collaborate!
          </p>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={onSubmit}
          >
            <div className="form-flex">
              {/* NAME */}
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
                fullWidth

                InputProps={{
                  style: { color: '#fff' }, // TEXT COLOR
                }}

                InputLabelProps={{
                  style: { color: '#aaa' }, // LABEL COLOR
                }}
              />

              {/* EMAIL */}
              <TextField
                required
                name="email"
                id="contact-email"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter a valid email address' : ''}
                disabled={status === 'sending'}
                fullWidth
              />
            </div>

            {/* SUBJECT (optional) */}
            <TextField
              name="subject"
              id="contact-subject"
              label="Subject (optional)"
              placeholder="What is this about?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={status === 'sending'}
              fullWidth
              className="body-form"
            />

            {/* MESSAGE */}
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
              fullWidth
            />

            {/* Honeypot field – hidden from real users */}
            <input
              type="text"
              name="company"
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="contact-honeypot"
              tabIndex={-1}
              aria-hidden="true"
            />

            {/* SUCCESS */}
            {status === 'success' && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Success! Your message has been sent.
              </Alert>
            )}

            {/* ERROR */}
            {status === 'error' && (
              <Alert severity="error" sx={{ mb: 2 }} onClose={() => setStatus('idle')}>
                {errorMessage}
              </Alert>
            )}

            {/* BUTTON */}
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={status === 'sending'}
              sx={{ mt: 2 }}
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
