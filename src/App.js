
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Dashboard from './Components/Dashboard';
import Artist from './Components/Artist';

function App() {
  return (
    <>


   
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        
          <Route path="artist" element={<Artist />} />
         
        
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
