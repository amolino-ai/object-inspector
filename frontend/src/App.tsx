import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import EmailSearchBar from './components/EmailSearchBar';
import EmailDetails from './components/UserDetailsCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <div className="main-content">
        <SearchBar />
        <EmailSearchBar />
          </div>
    </div>
  );
}

export default App;
