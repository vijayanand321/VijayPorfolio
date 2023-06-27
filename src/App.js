//import './App.css';
import React from 'react';
import './index.css';
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import ContactUs from './routes/ContactUs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/Project' element={<Project></Project>}></Route>
    <Route path='/About' element={<About></About>}></Route>
    <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
   </Routes>
   </>
  );
}

export default App;
