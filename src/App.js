import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';





function App() {
  return (
    <div className="App scrollbar">
      
      <Navbar/>
      
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/Projects' element={<Project/>} />
      </Routes>
      
     
    </div>
  );
}

export default App;
