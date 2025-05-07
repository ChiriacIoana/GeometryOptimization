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
    <div className="yap">Materialele utilizate pentru construcția brațului robotic joacă un rol esențial în asigurarea durabilității, preciziei și funcționalității întregului sistem. Fiecare componentă a fost aleasă pentru a răspunde cerințelor de rezistență mecanică, fiabilitate electronică și adaptabilitate la condițiile de utilizar. Prin combinarea materialelor potrivite — plăci de dezvoltare și motoare potrivite, precum și materiale plastice ecologice pentru structura fizică — am reușit să construim un braț robotic eficient, robust și ușor de controlat.</div>
    <div class="materials-grid">
  <div class="material-card">
    <h3>Arduino UNO</h3>
    <p>Arduino UNO  este o platforma de procesare open-source, bazata pe software si hardware flexibil si simplu de folosit.</p>
    <p class="material-category"><a href="https://store.arduino.cc/products/arduino-uno-rev3?srsltid=AfmBOorhpKsfOjycSfKl6fi7nrpuqd8MDEIlUzxhslXTzHXQQajlCrEr"
    className="material-category"
    target="_blank" 
    rel="noopener noreferrer"
    >Electronică</a></p>
  </div>

  <div class="material-card">
    <h3>Servomotoare</h3>
    <p>Un servo este un motor specializat. Are o placă de control încorporată și un potențiometru de feedback pentru o poziționare precisă. Este ușor să controlăm un servomotor folosind un microcontroler, cum ar fi un Arduino.</p>
    <p class="material-category"><a href="https://www.gobilda.com/2000-series-dual-mode-servo-25-3-speed/"
    className="material-category"
    target="_blank" 
    rel="noopener noreferrer"
    >Mecanică/Electronică</a></p>
  </div>

  <div class="material-card">
    <h3>Filament PLA</h3>
    <p>PLA este unul dintre cele mai utilizate filamente datorită ușurinței sale de utilizare și accesibilității. Este derivat din resurse regenerabile, ceea ce îl face prietenos cu mediul.</p>
    <p class="material-category"><a href="https://www.3dinbox.ro/cumpara/fillamentum-pla-extrafill-vertigo-galaxy-1258"
    className="material-category"
    target="_blank" 
    rel="noopener noreferrer"
    >Imprimare 3D</a></p>
  </div>

  <div class="material-card">
    <h3>Potentiometre</h3>
    <p>Senzori analogici folosiți pentru a detecta unghiurile de rotație și a trimite feedback către controler.</p>
    <p class="material-category"><a href="https://sigmanortec.ro/Potentiometru-1K-5K-10K-20K-50K-100K-p136286400#/8-valoare_k_-10k"
    className="material-category"
    target="_blank" 
    rel="noopener noreferrer"
    >Electronică</a></p>
  </div>

  <div class="material-card">
    <h3>Fire și conectori</h3>
    <p>Necesare pentru a conecta alimentarea, semnalele de control și datele între componente.</p>
    <p class="material-category"><a href="https://sigmanortec.ro/40-fire-Dupont-10cm-Mama-Mama-p129872525?SubmitCurrency=1&id_currency=2&gad_source=1&gad_campaignid=22174019478&gbraid=0AAAAAC3W72O7hMHA1VOBrzPgyOV8rj_9-&gclid=CjwKCAjwiezABhBZEiwAEbTPGC0vh6NaL6ngk2R5bV9zRHaymcQdHAtaqOPAuKI7uwVZ-K_TCj2B1xoCMuQQAvD_BwE"
    className="material-category"
    target="_blank" 
    rel="noopener noreferrer"
    >Electronică</a></p>
  </div>

  <div class="material-card">
    <h3>Buton Push</h3>
    <p>Permite controlul manual sau declanșarea anumitor funcții ale brațului robotic.</p>
    <p class="material-category"><a href="https://www.robofun.ro/set-4-butoane-multicolore.html?gad_source=1&gad_campaignid=20383925641&gbraid=0AAAAApSyPJXrPf9dlfhIvE_76yi1bNQPI&gclid=CjwKCAjwiezABhBZEiwAEbTPGL1ko7JUUrzxB5jqSVMzc7WMhilg6qp42yaz_--l-0EYedqYYqcjKxoCDCgQAvD_BwE"
    className="material-category"
    target="_blank" 
    rel="noopener noreferrer"
    >Electronică</a></p>
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

