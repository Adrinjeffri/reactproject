import React ,{ useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './screens';
import About from './screens/about';
import Contact from './screens/contact';
import Destination from './screens/destination';
import Hotel from './screens/hotel';
import Dolist from './screens/dolist';
// npm i bootstrap@5.3.1 -s
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap";

//npm i bootstrap-icons -s
// import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";





const App = () => {

  useEffect(() => {
    console.log("🚀 App component has mounted");
  }, []);

  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path='' element={<About></About >}></Route>
        
        <Route path='/index' element={<Index></Index>}></Route>
        <Route path='/dolist' element={<Dolist></Dolist>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/destination' element={<Destination></Destination >}></Route>
        <Route path='/hotel' element={<Hotel></Hotel>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;