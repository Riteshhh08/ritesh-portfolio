import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { BsChatDots } from 'react-icons/bs';

const WEB3FORMS_ACCESS_KEY = '9f37fc21-ad4f-4a44-9e7a-a4a60caea8d6';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSend = async () => {
    if (!name.trim() || !email.trim() || !message.trim() || !emailRegex.test(email.trim())) {
      // Simple validation alert as required
      // eslint-disable-next-line no-alert
      alert('Please fill all fields with a valid email.');
      return;
    }
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result?.message || 'Failed to send message');
      }

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Web3Forms error:', err);
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left card */}
        <div className="w-full lg:w-[45%] bg-[#7C3AED] rounded-3xl p-10 text-white shadow-xl">
          <p className="text-purple-200 font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </p>
          <h2 className="text-5xl font-black text-white mt-2">Contact.</h2>
          <p className="text-purple-200 mt-3 text-base">
            Have a project in mind or want to discuss DevOps &amp; Cloud opportunities?
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <label className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
                <FiUser size={16} /> Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What's your good name?"
                className="contact-input w-full px-4 py-3 rounded-xl border-0 text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 text-base font-medium"
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
                <MdEmail size={16} /> Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="What's your email address?"
                className="contact-input w-full px-4 py-3 rounded-xl border-0 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 text-base font-medium"
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
                <BsChatDots size={16} /> Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What do you want to say?"
                rows={6}
                className="contact-input w-full px-4 py-3 rounded-xl border-0 resize-none bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 text-base font-medium"
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              />
            </div>

            <button
              type="button"
              onClick={handleSend}
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                backgroundColor: success ? '#d1fae5' : error ? '#fee2e2' : '#ffffff',
                color: success ? '#065f46' : error ? '#991b1b' : '#7C3AED',
              }}
            >
              {loading && (
                <svg
                  className="animate-spin w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {loading
                ? 'Sending...'
                : success
                ? "✅ Message sent! I will get back to you soon."
                : error
                ? '❌ Something went wrong. Try again.'
                : 'SEND MESSAGE →'}
            </button>

            <div className="mt-6 space-y-1.5 text-purple-200 text-sm">
              <p>📧&nbsp; riteshvishwakarma.work@gmail.com</p>
              <p>📱&nbsp; +91 9044942437</p>
              <p>🔗&nbsp; linkedin.com/in/ritesh-vishwakarma08</p>
            </div>
          </div>
        </div>

        {/* Right animated sphere */}
        <div className="w-full lg:w-[55%] relative flex items-center justify-center overflow-hidden">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-purple-400 opacity-40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-72 h-72 md:w-80 md:h-80 rounded-full relative"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #4B5563, #111827)',
            }}
          >
            {[0, 60, 120].map((angle, idx) => (
              <motion.div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                animate={{ rotate: 360 }}
                transition={{ duration: 8 + idx * 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border-2 border-blue-400 opacity-40"
                style={{
                  transform: `rotateX(${angle}deg) rotateY(${angle}deg)`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
