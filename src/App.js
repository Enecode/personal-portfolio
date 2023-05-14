import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Component/About';
// import Nav from './Component/Nav';
import Inspiration from './Component/Inspiration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inspiration" element={<Inspiration />} />
      </Routes>
    </Router>
  );
}

export default App;
