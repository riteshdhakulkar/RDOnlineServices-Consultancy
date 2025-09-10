import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home'
import About from './Components/About/About';
function App() {
  return (
    <div>
     <Header/>
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/skills' element={<Skills/>} />
     <Route path='/project' element={<Project/>}/>
     <Route path='/contact' element={<Contact />} />
     <Route path='/about' element={<About/>}/> 
     </Routes>
      
      

      <Footer/>
    </div>
  );
}

export default App;
