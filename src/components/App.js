import React from 'react';
import Navbar from '../containers/navigation/Navbar.container';
import Hero from './hero/Hero.component';
import Footer from './footer/Footer.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuModal from '../containers/menu-modal/MenuModal.container';
import Contact from './contact/Contact.component';
import About from './about/About.component';
import ForParents from './hero-pages/for-parents/ForParents.component';
import ForTeachers from './hero-pages/for-teachers/ForTeachers.component';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <MenuModal />
      <Route exact path="/" component={Hero} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact path="/for-teachers" component={ ForTeachers }/>
      <Route exact path="/for-parents" component={ ForParents }/>
      <Footer />
    </Router>
    </>
  )
};

export default App;
