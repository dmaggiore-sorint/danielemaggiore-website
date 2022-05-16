import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/global/Layout';
import Home from './pages/Home';
import './scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="" element={ <Home /> }/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
