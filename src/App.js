import React from "react";
import Home from "./Screen/Home";
import Info from "./Screen/Info";
import Team from "./Screen/Team";
import Issues from "./Screen/Issues";
import Contacts from "./Screen/Contacts";
import Navbar from "./Component/Navbar";
import{BrowserRouter,Routes,Route} from "react-router-dom";


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Info" element={<Info/>}/>
          <Route path="/Team" element={<Team/>}/>
          <Route path="/Issues" element={<Issues/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
export default App;
