import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/tailwind.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';

ReactDOM.render(
  <Router>
    <Header />
    <Routes />
    <Footer />
  </Router>,
  document.getElementById('root')
);
