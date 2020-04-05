import React from 'react';
import Navbar from './navigation/navbar/NavBar.component';
import Hero from './hero/Hero.component';
import Footer from './footer/Footer.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Route component={Hero}/>
      <Footer />
    </Router>
    </>
  )
};

export default App;
