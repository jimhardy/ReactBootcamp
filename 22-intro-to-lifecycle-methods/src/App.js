import React from 'react';
import './App.css';
import GithubUserInfo from './githubUserInfo';
import ZenQuote from './zenQuote';

function App() {
    return (
        <div className="App">
            <ZenQuote />
            <GithubUserInfo username="jimhardy" />
        </div>
    );
}

export default App;
