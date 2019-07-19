import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/layout/footer';
import Home from './components/home';
import './utils/fontawesome';

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Footer />
  </Router>
);

export default App;
