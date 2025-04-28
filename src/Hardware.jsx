import React from 'react';
import ArmViewer from './ArmViewer';
import Collage from './Collage';

const Hardware = () => {
return (
    <>
    <div className="page-titleHard">See the Change: Peptide Bond Optimization</div>
    <div  id="components-section"><span className="title">Componentele</span><span className="page-titleSmol">Brațului Robotic</span></div>
     <div className="yap">Acest colaj ilustrează principalele componente ale brațului robotic, prezentate individual pentru o înțelegere clară a structurii sale modulare.
        Fiecare imagine evidențiază o piesă esențială, explicând rolul său în funcționarea mecanismului complet.
        Scopul acestei prezentări este să ofere o perspectivă vizuală detaliată asupra modului în care ansamblul a fost proiectat și construit.
     </div>
    <Collage/>

    <div id="animation-section"><span className="title">Animație 3D</span><span className="page-titleSmol">Braț Robotic</span></div>
     <div className="yap">Mai jos este prezentată o animație 3D a modelului pentru brațul robotic, realizat cu ajutorul programului de proiectare asistată de calculator, Fusion 360. Modelarea 3D a fost un pas esențial pentru a putea vizualiza și ajusta designul final înainte de trecerea la faza fizică. 
        După finalizarea proiectării digitale, toate componentele au fost printate folosind tehnologia de imprimare 3D. 
        Piesele rezultate au fost asamblate manual, iar în final, brațul robotic a fost programat să execute o serie de mișcări precise.
     </div>

     <div className="armViewerWrapper">
      <div className="armViewerBackground" />
     <div className="armViewerContainer">
        <ArmViewer modelPath="/TestModel2Modif.fbx" />
      </div>
      </div>

    <div id="materials-section"><span className="title">Materiale</span><span className="page-titleSmol">Braț Robotic</span></div>
    <div className="yap">Materialele utilizate pentru construcția brațului robotic joacă un rol esențial în asigurarea durabilității, preciziei și funcționalității întregului sistem. Fiecare componentă a fost aleasă cu grijă pentru a răspunde cerințelor de rezistență mecanică, fiabilitate electronică și adaptabilitate la condiții de utilizare variate. Prin combinarea materialelor potrivite — de la plăci de dezvoltare performante și motoare de înaltă precizie, până la materiale plastice ecologice pentru structura fizică — am reușit să construim un braț robotic eficient, robust și ușor de controlat. Se acordă o atenție specială integrării armonioase între componentele mecanice și cele electronice, astfel încât să asigurăm o funcționare optimă și o experiență practică de utilizare.</div>
    <div class="materials-grid">
  <div class="material-card">
    <h3>Arduino Uno</h3>
    <p>Placă de microcontroler bazată pe ATmega328P. Controlează toți motoarele și intrările brațului robotic.</p>
    <p class="material-category">Electronică</p>
  </div>

  <div class="material-card">
    <h3>Servomotoare</h3>
    <p>Motoare cu cuplu ridicat care permit mișcări precise ale fiecărui braț sau articulație.</p>
    <p class="material-category">Mecanică/Electronică</p>
  </div>

  <div class="material-card">
    <h3>Filament PLA</h3>
    <p>Material ecologic pentru imprimare 3D, utilizat la fabricarea componentelor structurale ale brațului robotic.</p>
    <p class="material-category">Imprimare 3D</p>
  </div>

  <div class="material-card">
    <h3>Potentiometre</h3>
    <p>Senzori analogici folosiți pentru a detecta unghiurile de rotație și a trimite feedback către controler.</p>
    <p class="material-category">Electronică</p>
  </div>

  <div class="material-card">
    <h3>Fire și conectori</h3>
    <p>Necesare pentru a conecta alimentarea, semnalele de control și datele între componente.</p>
    <p class="material-category">Electronică</p>
  </div>

  <div class="material-card">
    <h3>Buton Push</h3>
    <p>Permite controlul manual sau declanșarea anumitor funcții ale brațului robotic.</p>
    <p class="material-category">Electronică</p>
  </div>
</div>

     
     <div className="copyright">
      Made with &#10084; by <a 
        className="footer-link"
        href="https://www.instagram.com/ioana.chr9/?next=%2F" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        ioana
      </a>
    </div>
  </>
)
};

export default Hardware;

