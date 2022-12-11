import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import {Routes, Route} from "react-router-dom"




function App() {
  return (
    <>
    
      <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/features" element={<Features />}/>
  <Route path="/pricing" element={<Pricing />}/>
  <Route path="/faq" element={<Faq />}/>
  <Route path="/blog" element={<Blog />}/>
  <Route path="/contact" element={<Contact />}/>
</Routes>
      
      
    </>
  );
}

export default App;

