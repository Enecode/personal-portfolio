import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Component/About';
// import Nav from './Component/Nav';
import Inspiration from './Component/Inspiration';
import Project from './Component/projects/Project';
import Article from './Component/Articles/Article';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/project" element={<Project />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
