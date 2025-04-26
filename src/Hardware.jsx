import React from 'react';
import ArmViewer from './ArmViewer';

const Hardware = () => {
return (
    <>
    <div className="page-titleHard">See the Change: Peptide Bond Optimization</div>
    <div><span className="title">Animație 3D</span><span className="page-titleSmol">Braț Robotic</span></div>
     <div className="yap">Mai jos este prezentată o animație 3D a modelului pentru brațul robotic, realizat în Fusion. Acest model a fost ulterior printat, asamblat și programat, pentru a realiza mișcarile pe care ni le dorim.
     </div>
     <div className="armViewerContainer">
        <ArmViewer modelPath="/TestModel2Modif.fbx" />
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

