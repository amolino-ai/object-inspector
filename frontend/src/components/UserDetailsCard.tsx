import React, { useState } from 'react';

const EmailDetails: React.FC = () => {
  const [email, setEmail] = useState<any>(null);

  const fetchEmail = (query: string) => {
    console.log('Fetching email for:', query);
    // Fetch email logic here
  };

 

  return (
    <div className="email-details">
      {email ? (
        <div>
          <p>ID: {email.id}</p>
          <p>Subject: {email.subject}</p>
          <p>Body: {email.body}</p>
          <button onClick={() => console.log("hey")}>Download</button>
        </div>
      ) : (
        <p>Search an email ID to see details.</p>
      )}
    </div>
  );
};

export default EmailDetails;