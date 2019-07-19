import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/home';
import './utils/fontawesome';

const App = () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home} />
    <Footer />
  </Router>
);

export default App;
