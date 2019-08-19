import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/home';
import './utils/fontawesome';

const Login = React.lazy(() => import('./components/authentication/login'));
const Register = React.lazy(() => import('./components/authentication/register'));
const Restaurants = React.lazy(() => import('./components/restaurants'));
const Menu = React.lazy(() => import('./components/menu'));
const Dashboard = React.lazy(() => import('./components/dashboard'));

const App = () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home} />
    <React.Suspense fallback={null}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/restaurants" exact component={Restaurants} />
      <Route path="/restaurants/:id" component={Menu} />
      <Route path="/dashboard" component={Dashboard} />
    </React.Suspense>
    <Footer />
  </Router>
);

export default App;
