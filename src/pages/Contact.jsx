import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const debounceRef = useRef();

  // Fetch suggestion from your backend
  const fetchSuggestion = async (input) => {
    if (!input) {
      setSuggestion('');
      return;
    }
    try {
      const res = await fetch('/api/sarcastic-suggestion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      const data = await res.json();
      setSuggestion(data.suggestion);
    } catch {
      setSuggestion('');
    }
  };

  // Debounce API calls
  const handleChange = (e) => {
    const val = e.target.value;
    setMessage(val);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestion(val), 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab' && suggestion) {
      e.preventDefault();
      setMessage(suggestion);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        form.reset();
        navigate('/contact-success');
      } else {
        alert('Failed to send message.');
      }
    } catch (err) {
      alert('Failed to send message.');
    }
  };

  return (
<section className="contact-section">
  <h2>Let's Connect!</h2>
  <p>
    Whether you have an exciting project, a great opportunity, or just a funny meme to share—I'm all ears!
  </p>
  <form className="contact-form" onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="Your Amazing Name" required />
    <input type="email" name="email" placeholder="Your Best Email" required />
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Ghost div for suggestion */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: 120, // match textarea rows
          color: '#aaa',
          opacity: 0.6,
          fontStyle: 'italic',
          pointerEvents: 'none',
          whiteSpace: 'pre-wrap',
          fontFamily: 'inherit',
          fontSize: 16,
          padding: '0.7em 1em',
          boxSizing: 'border-box',
          zIndex: 1,
          overflow: 'hidden',
          background: 'transparent',
          // match textarea styles
        }}
      >
        <span style={{ color: 'transparent', userSelect: 'none' }}>{message}</span>
        {suggestion && message !== suggestion && (
          <span>{suggestion.slice(message.length)}</span>
        )}
      </div>
      {/* Actual textarea */}
      <textarea
        name="message"
        placeholder="Say Something Cool!"
        rows={5}
        required
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{
          width: '100%',
          fontSize: 16,
          background: '#fff', // <-- White background in light mode
          color: '#2d3142',
          position: 'relative',
          zIndex: 2,
          boxSizing: 'border-box',
          padding: '0.7em 1em',
          resize: 'none',
          fontFamily: 'inherit',
        }}
        autoComplete="off"
      />
    </div>
    <button type="submit">Shoot Your Message 🚀</button>
  </form>
  <p className="contact-note">
    *No spam, I promise. Just genuine conversations (unless you're a robot, then we can chat about AI taking over).*
  </p>
  <div className="contact-social">
    <p>Or find me here:</p>
    <a href="https://github.com/shahid2201" target="_blank" rel="noopener noreferrer">
      <img src={require('../assets/github-mark-white.png')} alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/mohammad-shahid-me/" target="_blank" rel="noopener noreferrer">
      <img src={require('../assets/InBug-White.png')} alt="LinkedIn" />
    </a>
  </div>
</section>

  );
};

export default Contact;
