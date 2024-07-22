import React, { useState } from 'react';

const EmailSearchBar: React.FC = () => {
  const [emailQuery, setEmailQuery] = useState('');

  const handleEmailSearch = () => {
    console.log('Searching for email:', emailQuery);
    // Placeholder for email search logic
  };

  const fetchUserByID = async (userID : string) => {
    const response = await fetch("http://127.0.0.1:8000/users/" + userID);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  }
  return (
    <div>
      <input
        type="text"
        value={emailQuery}
        onChange={(e) => setEmailQuery(e.target.value)}
        placeholder="Search email by ID or subject"
      />
      <button onClick={() => fetchUserByID(emailQuery)}>Search Email</button>
    </div>
  );
};

export default EmailSearchBar;
