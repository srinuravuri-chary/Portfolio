import './App.css';
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Skills from './pages/Skills/Skills.jsx'; 
import Projects from './pages/Projects/Projects.jsx';
import Contacts from './pages/Contacts/Contacts.jsx'; 
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}
export default App;