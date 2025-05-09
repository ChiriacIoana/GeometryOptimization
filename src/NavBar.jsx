import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToElement } from "./utils";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    const handleHomeClick = () => {
      if (location.pathname !== "/home") {
        navigate("/home"); // Go to MainPage
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
        <li className="dropdown-item" onClick={() => scrollToElement('components-section')}>Componente</li>
        <li className="dropdown-item" onClick={() => scrollToElement('animation-section')}>Animație 3D</li>
        <li className="dropdown-item" onClick={() => scrollToElement('materials-section')}>Materiale</li>

        </ul>
      </li>
    </ul>
  </nav>
);
};

export default NavBar;