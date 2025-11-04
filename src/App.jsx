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
import Message from './pages/Message/Message';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <Route path='/message' element={<Message />}></Route>
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>

  );
}

export default App;
