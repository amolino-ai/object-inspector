import React, { useState } from 'react';

const DocumentDetails: React.FC = () => {
  const [document, setDocument] = useState<any>(null);

  const fetchDocument = (query: string) => {
    console.log('Fetching document for:', query);
    // Fetch document logic here

  };

  return (
    <div className="card">
      <h2>Document Details</h2>
      {document ? (
        <div>
          <p>ID: {document.id}</p>
          <p>Email: {document.email}</p>
          <p>Name: {document.name}</p>
          <button onClick={() => console.log('Download document')}>Download</button>
        </div>
      ) : (
        <p>Select a document to see details.</p>
      )}
    </div>
  );
};

export default DocumentDetails;
