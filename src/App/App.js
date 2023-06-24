import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './containers/Home';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import "../Styles/App.css"


function App() {

  return (

    <div className='App'>
      <div className='base'></div>

      <div className='everything-else'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
