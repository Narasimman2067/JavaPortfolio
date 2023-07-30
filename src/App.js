
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/Navbar/NavBar';
import { Banner } from './Components/Banner/Banner';

import { Skills } from './Components/Skills/Skills';
import Contact from './Components/Contacts/Contacts';
import { About } from './Components/About/About';



function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner/>
     <About/>
     <Skills/>
     
      <Contact/>

    </div>
  );
}

export default App;
