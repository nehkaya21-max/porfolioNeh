import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminMessage from './components/AdminMessage';
import Header from './components/header';
import Hero from './components/hero';
import Skill from './components/skills';
import Project from './components/project';
import Contact from './components/contact';
import AdminProjects from './components/AdminProjects';

const Home =()=>(
  <>
  <Hero />
    <Skill />
  <Project />
  <Contact />
  </>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminMessage />} />
        <Route path='/admin/projects' element={<AdminProjects/>}/>

      </Routes>
    </Router>
  );
}

export default App;