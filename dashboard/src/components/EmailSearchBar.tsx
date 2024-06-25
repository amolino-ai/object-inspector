import React, { useState } from 'react';

const EmailSearchBar: React.FC = () => {
  const [emailQuery, setEmailQuery] = useState('');

  const handleEmailSearch = () => {
    console.log('Searching for email:', emailQuery);
    // Placeholder for email search logic
  };

  return (
    <div>
      <input
        type="text"
        value={emailQuery}
        onChange={(e) => setEmailQuery(e.target.value)}
        placeholder="Search email by ID or subject"
      />
      <button onClick={handleEmailSearch}>Search Email</button>
    </div>
  );
};

export default EmailSearchBar;
