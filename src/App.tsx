import './App.scss';
import {Routes, Route} from "react-router-dom"
import {HomeRoute} from './Routes/HomeRoute'

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
          <Route path="/home" element={<HomeRoute />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
