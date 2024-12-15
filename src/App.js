import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setEmailError('Invalid email format');
      return;
    }
    console.log('Form submitted successfully');
  };

  return (
    <div>
      <h1>Controlled Components</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          text="Name" placeholder="Username"
        />
        <br></br>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError('');
          }}
          placeholder="Email"
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
