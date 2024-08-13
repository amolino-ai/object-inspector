import React, { useState } from 'react';

interface Email {
  _id: string
  from_: string;
  to: string;
  subject: string;
  source_path: string;
}

const EmailSearchBar: React.FC = () => {
  const [emailQuery, setEmailQuery] = useState('');
  const [email, setEmail] = useState<Email | Email[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEmailSearch = async () => {
      console.log('Searching for:', emailQuery);
      if (emailQuery) {
        try {
          let response;
          // Assuming query could be ID (numeric), email, or username
            response = await fetch(`http://127.0.0.1:8000/users/${emailQuery}`);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const data: Email = await response.json();
          setEmail(data);
          setError(null);
        } catch (err: any) {
          setError(err.message);
          setEmail(null);
        }
      }
    };

  return (
    <div>
      <h2>Email Details</h2>
      <p>Search an email ID to see details.</p>
      <input
        type="text"
        value={emailQuery}
        onChange={(e) => setEmailQuery(e.target.value)}
        placeholder="Search by email ID"
      />
      <button onClick={handleEmailSearch}>Search Email</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {email && (
        <div>
          <h3>Search Results</h3>
          {Array.isArray(email) ? (
            email.length > 0 ? email.map(email => (
              <div key={email._id}>
                <p>From: {email.from_}</p>
                <p>To: {email.to}</p>
                <p>Subject: {email.subject}</p>
                <p>Source Path: {email.source_path}</p>
              </div>
            )) : <p>No results found.</p>
          ) : (
            <div>
              <p>From: {email.from_}</p>
              <p>To: {email.to}</p>
              <p>Subject: {email.subject}</p>
              <p>Source Path: {email.source_path}</p>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default EmailSearchBar;
