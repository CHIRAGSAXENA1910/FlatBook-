import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import {BrowserRouter as Router,Route} from 'react-router-dom';
import {  BrowserRouter,Route,Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages';

import SigninPage from './pages/signin';
import SignUpPage from './components/SignUp'

function App() {
  return (
    // <Router>
    //     <Route path='/' component={Home} exact />
    //     <Route path='/signin' component={SigninPage} exact />
    // </Router>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SigninPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
