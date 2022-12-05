import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/HeaderBar/Header';
import MovieDetails from './components/Movies/MovieDetails';
import TvShowDetails from './components/TvShows/TvShowDetails';
import Overview from './components/Overview/Overview';
import NotFoundPage from './components/NotFound/NotFoundPage';
import { HOME, MOVIES, TVSHOWS } from './constants/routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Overview/>}/>
        <Route path={HOME} element={<Overview/>}/>
        <Route path={`${MOVIES}/:id`} element={<MovieDetails/>}/>
        <Route path={`${TVSHOWS}/:id`} element={<TvShowDetails/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
