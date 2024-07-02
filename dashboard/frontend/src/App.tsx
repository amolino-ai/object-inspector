import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import DocumentDetails from './components/DocumentDetails';
import EmailSearchBar from './components/EmailSearchBar';
import EmailDetails from './components/EmailDetails';
import AnalysisDetails from './components/AnalysisDetails';
import URLInput from './components/URLInput';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <div className="main-content">
        <SearchBar />
        <DocumentDetails />
        <EmailSearchBar />
        <EmailDetails />
        <AnalysisDetails />
        <URLInput />
      </div>
    </div>
  );
}

export default App;
