import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToElement } from "./utils";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    const handleHomeClick = () => {
      if (location.pathname === "/home") {
        navigate("/"); // Go back to MainPage
      } else {
        navigate("/home"); // Go to HomePage
      }
    };
    const handleSoftwareClick = () => {
        navigate("/"); // Go to MainPage
    };
    const handleHardwareClick = () => {
        navigate("/hardware"); // Go to HardwarePage
    }
return (
    <nav className="navbar">
    <ul className="nav-items">
        <li className="nav-item" onClick={handleHomeClick}>Home</li>

      <li className="nav-item dropdown" onClick={handleSoftwareClick}>
        Software
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={() => scrollToElement('explicatii-section')}>Explicații</li>
          <li className="dropdown-item" onClick={() => scrollToElement('media-section')}>Before/After</li>
          <li className="dropdown-item" onClick={() => scrollToElement('3d-section')}>Animație 3D</li>
        </ul>
      </li>

      <li className="nav-item dropdown" onClick={handleHardwareClick}>
        Hardware
        <ul className="dropdown-menu">
        <li className="dropdown-item" onClick={() => scrollToElement('sensor-kit-section')}>Sensor Kit</li>
        <li className="dropdown-item" onClick={() => scrollToElement('microcontroller-section')}>Microcontroller</li>
        <li className="dropdown-item" onClick={() => scrollToElement('robotics-section')}>Robotics</li>

        </ul>
      </li>
    </ul>
  </nav>
);
};

export default NavBar;