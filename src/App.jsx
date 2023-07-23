
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import MyProjects from './pages/Projects';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<MyProjects></MyProjects>}></Route>

      </Routes>

    </Router>

  );
}

export default App;
