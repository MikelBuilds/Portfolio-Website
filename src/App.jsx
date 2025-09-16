import "./App.css";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <>
      <ParticleBackground />
      <Headers />
      <Hero />
      <MyProjects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
