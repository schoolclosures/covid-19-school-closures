import React from 'react';
import Navbar from '../containers/navigation/Navbar.container';
import Hero from './hero/Hero.component';
import Footer from './footer/Footer.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuModal from '../containers/menu-modal/MenuModal.container';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <MenuModal />
      <Route path="/" component={Hero}/>
      <Footer />
    </Router>
    </>
  )
};

export default App;
