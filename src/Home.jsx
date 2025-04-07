import React from "react";
import './Home.css';
import './App.css';

const images = [
    "./testPic.jpg",
    "https://source.unsplash.com/random/300x300?sig=2",
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
    <div class="yap-container" id="explicatii-section">
        <div class="page-titleHome">See the Change: Peptide Bond Optimization</div>
        <div class="title">Despre Proiectul Nostru</div>
        <div class="yap">Proiectul nostru combină componente software și hardware pentru a explora și vizualiza interacțiunile moleculare prin prisma chimiei cuantice și a roboticii. Partea software integrează ORCA și Avogadro, două instrumente puternice din domeniul chimiei computaționale, pentru a realiza optimizări geometrice și calcule cuantice pe peptide. Astfel, pot fi modelate cu acuratețe structurile moleculare și comportamentul acestora la nivel atomic.

                        Partea hardware completează aplicația software prin utilizarea unui braț robotic, care reprezintă fizic formarea legăturilor chimice. Manipulând modele atomice individuale, sistemul robotic arată vizual cum se formează moleculele – aducând conceptele abstracte din chimie într-o formă tangibilă și interactivă.
        </div>
        <div class="title">Inspirație</div>
        <div class="yap">Acest proiect a fost inspirat de pasiunea pentru chimie și robotică, dar și de dorința de a face mai ușor de înțeles interacțiunile moleculare. Văzând cât de dificil poate fi să vizualizezi ce se întâmplă la nivel molecular, ne-am dorit să creez ceva care să reducă distanța dintre teorie și percepție.
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
    <div className="copyrightHome">
    Made with &#10084; by @chiriacioana2008@gmail.com
    </div>
    </div>
  );
};

export default Home;
