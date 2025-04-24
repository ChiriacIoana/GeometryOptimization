import React from "react";
import './Home.css';
import './App.css';

const images = [
    "./testPic.jpg",
    "./RoboticArmPic.jpg",
    "https://source.unsplash.com/random/300x300?sig=3",
    "https://source.unsplash.com/random/300x300?sig=4",
    "https://source.unsplash.com/random/300x300?sig=5",
    "https://source.unsplash.com/random/300x300?sig=6",
    "https://source.unsplash.com/random/300x300?sig=7",
    "https://source.unsplash.com/random/300x300?sig=8",
    "https://source.unsplash.com/random/300x300?sig=9",
    "https://source.unsplash.com/random/300x300?sig=10",
  ];

const Home = () => {
  return (
    <div>
    <div className="yap-container" id="explicatii-section">
        <div className="page-titleHome">See the Change: Peptide Bond Optimization</div>
        <div className="title">Despre Proiectul Nostru</div>
        <div className="yap">Proiectul nostru combină componente software și hardware pentru a explora și vizualiza interacțiunile moleculare prin prisma chimiei cuantice și a roboticii. Partea software integrează ORCA și Avogadro, două instrumente puternice din domeniul chimiei computaționale, pentru a realiza optimizări geometrice și calcule cuantice pe peptide. Astfel, pot fi modelate cu acuratețe structurile moleculare și comportamentul acestora la nivel atomic.

                        Partea hardware completează aplicația software prin utilizarea unui braț robotic, care reprezintă fizic formarea legăturilor chimice. Manipulând modele atomice individuale, sistemul robotic arată vizual cum se formează moleculele – aducând conceptele abstracte din chimie într-o formă tangibilă și interactivă.
        </div>
        <div className="title">Inspirație</div>
        <div className="yap">Acest proiect a fost inspirat de pasiunea pentru chimie și robotică, dar și de dorința de a face mai ușor de înțeles interacțiunile moleculare. Văzând cât de dificil poate fi să vizualizezi ce se întâmplă la nivel molecular, ne-am dorit să creez ceva care să reducă distanța dintre teorie și percepție.
        </div>
    </div>
    <div className="gallery-container">
      <h2 className="gallery-title">Galerie</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
           <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    <div className="authors-section">
    <h3 className="authors-title">Echipa Noastră</h3>
    <div className="authors-grid">
    <div className="author-card">
      <img src="./Author.1.jpg" alt="Chiriac Ioana" />
      <p className="author-name">Chiriac Ioana</p>
      <p className="author-role">Programare</p>
     </div>
    <div className="author-card">
      <img src="./Author.2.jpg" alt="Moldoveanu Radu" />
      <p className="author-name">Moldoveanu Radu</p>
      <p className="author-role">Modelare 3D</p>
    </div>
    <div className="github-links">
          <div className="github-link-container">
            <img className="github-logo" src="./gitHubLogo.png" alt="GitHub Logo" />
            <a href="https://github.com/ChiriacIoana" className="github-link" target="_blank" rel="noopener noreferrer">ChiriacIoana</a>
          </div>
          <div className="github-link-container">
            <img className="github-logo" src="./gitHubLogo.png" alt="GitHub Logo" />
            <a href="https://github.com/MoldoveanuRadu" className="github-link" target="_blank" rel="noopener noreferrer">Moldoveanu Radu GitHub</a>
          </div>
          </div>
    </div>
    </div>
    <div className="copyrightHome">
    Made with &#10084; by @chiriacioana2008@gmail.com
    </div>
    </div>
  );
};

export default Home;