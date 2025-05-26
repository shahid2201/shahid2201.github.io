import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = 'https://iiypy3pqsf.execute-api.ca-central-1.amazonaws.com/prod';

const Contact = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);
  const debounceRef = useRef();

  // Fetch suggestion from your backend
  const fetchSuggestion = async (input) => {
    if (!input) {
      setSuggestion('');
      setLoadingSuggestion(false);
      return;
    }
    setLoadingSuggestion(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/sarcastic-suggestion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setSuggestion(data.suggestion);
    } catch {
      setSuggestion('');
    }
    setLoadingSuggestion(false);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setMessage(val);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestion(val), 600);
  };

  const handleKeyDown = (e) => {
    if ((e.key === 'Tab' || e.key === 'ArrowRight') && suggestion) {
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
      const res = await fetch(`${BACKEND_URL}/contact`, {
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
      {/* Suggestion box above textarea */}
      {message && (
        loadingSuggestion ? (
          <div className="suggestion-box"><strong>Don't sweat! Here's something you can write:</strong><br />Thinking of something witty...</div>
        ) : (
          suggestion && (
            <div className="suggestion-box">
              <strong>Don't sweat! Here's something you can write:</strong>
              <br />
              {suggestion}
              <button
                type="button"
                className="accept-suggestion-btn"
                style={{
                  marginTop: '0.7em',
                  padding: '0.4em 1em',
                  borderRadius: '0.5em',
                  border: 'none',
                  background: '#2d5fff',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.98em',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
                onClick={() => setMessage(message ? message + ' ' + suggestion : suggestion)}
              >
                Use Suggestion
              </button>
            </div>
          )
        )
      )}
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
          color: '#2d3142',
          boxSizing: 'border-box',
          padding: '0.7em 1em',
          resize: 'none',
          fontFamily: 'inherit',
          marginTop: '0.5em'
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
