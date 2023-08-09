
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyProjects from './pages/Projects';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<MyProjects></MyProjects>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
