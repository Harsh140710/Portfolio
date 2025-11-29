import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Projects from "./pages/Projects";
import NavBar from "./components/Navigation/NavBar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div>
      <NavBar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path='*' element={
          <div className="h-screen w-full flex items-center justify-center text-5xl font-bold">
            404, Page not found
          </div>
        }/>
      </Routes>
    </div>
  );
};

export default App;



