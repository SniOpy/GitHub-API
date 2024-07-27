import React, { useEffect, useState } from 'react';
import Header from '../src/Header/Header';
import SearchBar from '../src/SearchBar/SearchBar';
import Message from '../src/Message/Message';
import ResultRepos from '../src/ResultRepos/ResultRepos';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import axios from 'axios';
import repos from '../data/repos';

import './App.scss';

function App() {

  const [resultSearch, setResultSearch] = useState('');
  const [total, setTotal] = useState(0);
  const [repos, setRepos] = useState([]);
  
  const fetchRepos = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${resultSearch}`);
      setTotal(response.data.total_count);
      setRepos(response.data.items)
      
    } catch (error) {
      console.log(error);
    }
  }
// 1. Useffect se lance à chaque modification (rafraichissement)
// 2. En précisant dans les dépendances un [], le hook se charge de l'afficher au 1er rendu
useEffect(() => {
  fetchRepos();
  console.log("ResultSearch");
  
}, [resultSearch]);

  
  
  const onSubmit = (value: string) => {
    setResultSearch(value);
    
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="App">
          <Header/>
          <SearchBar onSubmit={onSubmit}/>
          <Message total={total}/>
          <ResultRepos repos={repos}/>
        </div>
      </Container>
    </React.Fragment>
    
  )
}

export default App
