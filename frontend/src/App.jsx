import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from "react";
import MainContainer from './Components/MainContainer';
import PlaceholderPage from './pages/PlaceholderPage';
import './App.css';

require('dotenv').config()


function App() {
  return (
    <Suspense fallback={<MainContainer />}>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route path="*" element={<PlaceholderPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
