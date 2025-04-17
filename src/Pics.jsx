import React from "react";

const Pics = () => {
  return (
    <div className="media-container">
      <div className="pic-wrapper">
        <img className="pic" src="./component1.jpg" alt="Prima Component" />
        <p class="pics-text">-COOH</p>
      </div>
      <div className="pic-wrapper">
        <img className="pic" src="./component2.jpg" alt="A Doua Componenta" />
        <p class="pics-text">-NH₂</p>
      </div>
    </div>
  );
};

export default Pics;
