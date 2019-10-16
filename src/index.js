import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/tailwind.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header'


ReactDOM.render(
    <Router>
        <Header />
        <Routes />
    </Router>,
    document.getElementById('root')
);