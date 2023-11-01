import Home from './Component/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Component/About/About';
// import Nav from './Component/Nav';
import Inspiration from './Component/Inspirations/Inspiration';
import Project from './Component/projects/Project';
import Article from './Component/Articles/Article';
import YouTube from './Component/YouTube/YouTube';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/project" element={<Project />} />
        <Route path="/article" element={<Article />} />
        <Route path="/youtube" element={<YouTube />} />
      </Routes>
    </Router>
  );
}

export default App;
