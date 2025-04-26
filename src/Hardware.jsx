import React from 'react';
import ArmViewer from './ArmViewer';
import Collage from './Collage';

const Hardware = () => {
return (
    <>
    <div className="page-titleHard">See the Change: Peptide Bond Optimization</div>
    <div><span className="title">Componentele</span><span className="page-titleSmol">Brațului Robotic</span></div>
     <div className="yap">Acest colaj ilustrează principalele componente ale brațului robotic, prezentate individual pentru o înțelegere clară a structurii sale modulare.
        Fiecare imagine evidențiază o piesă esențială, explicând rolul său în funcționarea mecanismului complet.
        Scopul acestei prezentări este să ofere o perspectivă vizuală detaliată asupra modului în care ansamblul a fost proiectat și construit.
     </div>
    <Collage/>

    <div><span className="title">Animație 3D</span><span className="page-titleSmol">Braț Robotic</span></div>
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

