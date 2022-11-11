import './App.css';
import {
  Routes,
  Route,
  // Link
} from 'react-router-dom';

import Home from './pages/Home';
import QRgenerator from './pages/QRgenerator';
import QRscanner from './pages/QRscanner';

function App() {
  return (
    <div className="App">
      <div className="App-header" >
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/qr_generator" element={<QRgenerator/>} />
          <Route path="/qr_scanner" element={<QRscanner/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
