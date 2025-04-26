import './App.css';
import './Home.css';
import './Hardware.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
import Footer from './Footer';
import Hardware from './Hardware';
import ArmViewer from './ArmViewer';

function MainPage() {
  return (
    <>
    <NavBar />
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
      <Footer/>
    </div>
    </>
  );
}

function HomePage() {
  return (
    <>
    <NavBar />
    <div className="grid-containerHome">
      <Home/>
    </div>
  </>
  );
}

function HardwarePage() {
  return (
    <>
    <NavBar />
    <div className="hardware-container">
      <Hardware />
      <div className="armViewerContainer">
        <ArmViewer modelPath="/TestModel2Modif.fbx" />
      </div>
    </div>
  </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
       
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/hardware" element={<HardwarePage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;