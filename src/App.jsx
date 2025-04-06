import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import MoleculeViewer from "./MoleculeViewer";
import Space from "./Space";
import Media from "./Media";
import Yapping from "./Yapping";
import Space2 from './Space2';
import Space3 from './Space3';
import Pics from './Pics';
import FunFacts from './FunFacts';
import NavBar from './NavBar';
import Home from './Home';
import React from 'react';

function MainPage() {
  return (
    <div className="grid-container">
      <Yapping/>
      <Space3/>
      <Pics/>
      <Space/>
      <Media />
      <Space2/>
      <div className="left-side">
        <FunFacts/> 
      </div>
      <div className="viewer-container">
        <MoleculeViewer />
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div >
      <Home/>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;