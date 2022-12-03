import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/HeaderBar/Header';
import Overview from './components/Overview/Overview';
import NotFoundPage from './components/NotFound/NotFoundPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Overview/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
