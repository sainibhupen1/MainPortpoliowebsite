import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-50 w-full md:w-full">
      <Navbar />
      <HomePage />
      <Aboutus />
      <Skills />
      <Projects />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
