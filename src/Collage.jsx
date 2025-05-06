import React from "react";

const Collage = () => {
  const images = [
    {
      src: "./img1.jpg",
      subtitle: "Base",
      description: "Baza solidă a brațului robotic, oferind stabilitate întregului sistem."
    },
    {
      src: "./img2.jpg",
      subtitle: "Bottom Holder",
      description: "Suportul inferior și articulația principală, permit rotirea și susținerea axelor superioare."
    },
    {
      src: "./img3.jpg",
      subtitle: "B.H. Cover",
      description: "Carcasa de protecție care îmbracă componentele interne, asigurând durabilitate și siguranță."
    },
    {
      src: "./img4.jpg",
      subtitle: "Connector",
      description: "Elementul de legătură care unește secțiunile mobile ale brațului pentru mișcare flexibilă."
    },
    {
      src: "./img5.jpg",
      subtitle: "Double Holder",
      description: "Suport dublu care stabilizează două componente esențiale și le aliniază corect în ansamblu."
    },
    {
      src: "./img6.jpg",
      subtitle: "Gripper",
      description: "Dispozitivul de prindere (gripper) al brațului, utilizat pentru a manipula obiecte cu precizie."
    },
    {
      src: "./img7.jpg",
      subtitle: "Base plate",
      description: "Piesa finală care protejează și închide mecanismul de prindere pentru un aspect curat și funcționalitate sigură."
    }
  ];

  return (
    <div className="collage-container">
      {images.map((img, index) => (
        <div className="collage-item" key={index}>
          <img src={img.src} alt={img.subtitle} className="collage-image" />
          <h3 className="collage-subtitle">{img.subtitle}</h3>
          <p className="collage-description">{img.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Collage;
