import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rudak Projects 
          Portfolio V. 1.0
        </p>
        
      </header>
    </div>
  );
}

export default App;
