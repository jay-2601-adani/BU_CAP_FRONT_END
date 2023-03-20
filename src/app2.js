import Mainall from "./pages/select_bu_cap/mainall"
import Main from "./pages/select_bu_capability/main"
import TemporaryDrawer from "./pages/drawer"
import Home from "./pages/Home"
import Maintable from "./pages/select_bu_cap_table/maintable"
import Master from "./pages/mastertable/master"
import { useState } from "react"
import Bybu from "./pages/buby-cap/bybu"


import { BrowserRouter, Routes, Route} from "react-router-dom";

const App2=()=>{


    return (
      <div >
        <TemporaryDrawer ></TemporaryDrawer>
        <div >
        <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/bucap" element={<Mainall></Mainall>}></Route>
            <Route exact path="/bumas" element={<Main></Main>}></Route>
            <Route exact path="/bumat" element={<Maintable></Maintable>}></Route>
            <Route exact path="/bubycap" element={<Bybu></Bybu>}></Route>
            <Route exact path="/master" element={<Master></Master>}></Route>
          </Routes>
        </div>
        
       
      </div>
    );
}

export default App2