import React from 'react';
import Header from '../src/Header/Header';
import SearchBar from '../src/SearchBar/SearchBar';
import Message from '../src/Message/Message';
import ResultRepos from '../src/ResultRepos/ResultRepos';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="App">
          <Header/>
          <SearchBar/>
          <Message/>
          <ResultRepos/>
        </div>
      </Container>
    </React.Fragment>
    
  )
}

export default App
