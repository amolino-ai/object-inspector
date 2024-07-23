import React, { useState } from 'react';

interface User {
  id: number;
  username: string;
  email: string;
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
        if (!isNaN(Number(query))) {
          response = await fetch(`http://127.0.0.1:8000/users/${query}`);
        } else if (query.includes('@')) {
          // Filter by email
          response = await fetch(`http://127.0.0.1:8000/users`);
          const users: User[] = await response.json();
          setResults(users.filter(user => user.email === query));
          return;
        } else {
          // Filter by username
          response = await fetch(`http://127.0.0.1:8000/users`);
          const users: User[] = await response.json();
          setResults(users.filter(user => user.username === query));
          return;
        }
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
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by ID, email or name"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {results && (
        <div>
          <h2>Search Results</h2>
          {Array.isArray(results) ? (
            results.map(user => (
              <div key={user.id}>
                <p>ID: {user.id}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
              </div>
            ))
          ) : (
            <div>
              <p>ID: {results.id}</p>
              <p>Username: {results.username}</p>
              <p>Email: {results.email}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
