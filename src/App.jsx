import './App.css';
import MoleculeViewer from "./MoleculeViewer";
import Space from "./Space";
import Media from "./Media";
import Yapping from "./Yapping";
import Space2 from './Space2';
import Space3 from './Space3';
import Pics from './Pics';
import FunFacts from './FunFacts';
import NavBar from './NavBar';
import { div } from 'three/tsl';
function App() {
  return (
    <div>
    <NavBar/>
    <div className="grid-container">
    <Yapping/>
    <Space3/>
    <Pics/>
    <Space/>
    <Media />
    <Space2/>
    <div className="left-side">
        <FunFacts/> 
      </div>
    <div className="viewer-container">
      <MoleculeViewer />
    </div>
  </div>
  </div>
  );
}
export default App;