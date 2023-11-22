import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
import SignUp from './components/pages/signup';
import Consoles from './components/pages/consoles';
import Games from './components/pages/games';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';


function App() {
  return (
    <>
        <Router>
          <ScrollTop />
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/consoles' Component={Consoles}/>
          <Route path='/games' Component={Games}/>
          <Route path='/sign-up' Component={SignUp}/>
        </Routes>
        <Footer />
        </Router>  
    </>
  );
}

export default App;
