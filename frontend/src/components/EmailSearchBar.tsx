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
  if (emailQuery) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/emails/${encodeURIComponent(emailQuery)}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      setEmail(data);
      setError(null);
    } catch (err : any) {
      console.error("Fetch error:", err);
      setError(err.message);
      setEmail(null);
    }
  }
};


  return (
    <div>
      <h2>Email Details</h2>
      <p>Search an Email ID to see details.</p>
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
                <p><strong>From</strong>: {email.from_}</p>
                <p><strong>To</strong>: {email.to}</p>
                <p><strong>Subject</strong>: {email.subject}</p>
                <p><strong>Source Path</strong>: {email.source_path}</p>
              </div>
            )) : <p>No results found.</p>
          ) : (
            <div>
              <p><strong>From</strong>: {email.from_}</p>
              <p><strong>To</strong>: {email.to}</p>
              <p><strong>Subject</strong>: {email.subject}</p>
              <p><strong>Source Path</strong>: {email.source_path}</p>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default EmailSearchBar;
