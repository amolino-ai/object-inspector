import React, { useState } from 'react';

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email_addresses: {email_address: string}[];
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<User | User[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    console.log('Searching for:', query);
    if (query) {
      try {
        let response;
        // Assuming query could be ID (numeric), email, or username
          response = await fetch(`http://127.0.0.1:8000/users/${query}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data: User = await response.json();
        setResults(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setResults(null);
      }
    }
  };

  return (
    <div>
      <h2>User Details</h2>
      <p>Search a User ID for details.</p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by user ID"
      />
      <button onClick={handleSearch}>Search user</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {results && (
        <div>
          <h3>Search Results</h3>
          {Array.isArray(results) ? (
            results.map(user => (
              <div key={user._id}>
                <p>ID: {user._id}</p>
                <p>First Name: {user.first_name}</p>
                <p>Last Name: {user.last_name}</p>
                {/* <p>Email: {user.email_addresses} </p> */}
              </div>
            ))
          ) : (
            <div>
              <p>ID: {results._id}</p>
              <p>First Name: {results.first_name}</p>
              <p>Last Name: {results.last_name}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
