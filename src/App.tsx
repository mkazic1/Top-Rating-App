import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Movies from './components/Movies';
import NotFoundPage from './components/NotFoundPage';
import Overview from './components/Overview';
import TvShows from './components/TvShows';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tvshows" element={<TvShows/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
