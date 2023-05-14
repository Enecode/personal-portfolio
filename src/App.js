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
        {/* <Route path="/project" element={<h1>Project</h1>} /> */}
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
