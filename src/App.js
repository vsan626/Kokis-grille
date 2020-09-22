import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu'
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
        </Switch>
      <Footer />
    </div>
  );
}
