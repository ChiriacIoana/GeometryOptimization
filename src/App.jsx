import './App.css';
import MoleculeViewer from "./MoleculeViewer";
import Space from "./Space";
import Media from "./Media";
import Yapping from "./Yapping";
import Space2 from './Space2';
function App() {
  return (
    <div className="grid-container">
    <Yapping/>
    <Space/>
    <Media />
    <Space2/>
    <div className="viewer-container">
      <MoleculeViewer />
    </div>
  </div>
  );
}
export default App;