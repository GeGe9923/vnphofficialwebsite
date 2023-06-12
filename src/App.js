import { Routes, Route, } from 'react-router-dom';
import Home from "./routes/Home";
import Rooms from "./routes/Rooms";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Navbar from "./components/Navbar";

import "./styles.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
