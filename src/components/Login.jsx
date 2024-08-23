import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const data = {
      grant_type: 'password',
      username: username,
      password: password,
      scope: '',
      client_id: 'string',
      client_secret: 'string',
    };

    const formBody = Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');

    try {
      const response = await fetch('http://127.0.0.1:8000/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: formBody,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        // Handle successful login, save token, etc.
      } else {
        console.error('Error:', response.statusText);
        // Handle login error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
