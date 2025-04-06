import React from "react";
import { scrollToElement } from "./utils";

const NavBar = () => {
return (
    <nav className="navbar">
    <ul className="nav-items">
      <li className="nav-item">Home</li>

      <li className="nav-item dropdown">
        Software
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={() => scrollToElement('explicatii-section')}>Explicații</li>
          <li className="dropdown-item" onClick={() => scrollToElement('media-section')}>Before/After</li>
          <li className="dropdown-item" onClick={() => scrollToElement('3d-section')}>Animație 3D</li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        Hardware
        <ul className="dropdown-menu">
          <li className="dropdown-item">Sensor Kit</li>
          <li className="dropdown-item">Microcontroller</li>
          <li className="dropdown-item">Robotics</li>
        </ul>
      </li>
    </ul>
  </nav>
);
};

export default NavBar;