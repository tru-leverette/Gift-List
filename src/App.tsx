import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Gift List Header
        </p>
        
      </header>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
