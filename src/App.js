import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav/MainNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';
import { Container } from '@mui/material';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path='/' element={<Trending />} exact></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/series' element={<Series />}></Route>
            <Route path='/search' element={<Search />}></Route>
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>

  );
}

export default App;
