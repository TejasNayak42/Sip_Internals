// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Aboutus from './Components/Aboutus';
import Menu from './Components/Menu';
import Home from './Components/Home';

function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    <Routes> 
    <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<Aboutus/>}/>
      <Route path='/Menu' element={<Menu/>}/>
     </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
