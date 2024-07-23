import React, { useState } from 'react';

interface User {
  id: number;
  username: string;
  email: string;
}

const EmailSearchBar: React.FC = () => {
  const [emailQuery, setEmailQuery] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUserByID = async (userID: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/users/${userID}`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data: User = await response.json();
      setUser(data);
      setError(null); // Clear any previous errors
    } catch (err: any) {
      setError(err.message);
      setUser(null); // Clear previous user data on error
    }
  };

  const handleEmailSearch = () => {
    if (emailQuery) {
      fetchUserByID(emailQuery);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={emailQuery}
        onChange={(e) => setEmailQuery(e.target.value)}
        placeholder="Search user by ID"
      />
      <button onClick={handleEmailSearch}>Search Email</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {user && (
        <div>
          <h2>User Details</h2>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default EmailSearchBar;
