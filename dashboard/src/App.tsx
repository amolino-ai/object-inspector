import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import DocumentDetails from './components/DocumentDetails';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
        <SearchBar />
        <DocumentDetails />
      </header>
    </div>
  );
}

export default App;
