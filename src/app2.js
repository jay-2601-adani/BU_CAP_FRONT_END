import Mainall from "./pages/select_bu_cap/mainall"
import Main from "./pages/select_bu_capability/main"
import TemporaryDrawer from "./pages/drawer"
import Home from "./pages/Home"
import Maintable from "./pages/select_bu_cap_table/maintable"
import Master from "./pages/mastertable/master"
import { useState } from "react"
import Bybu from "./pages/buby-cap/bybu"
import Showl2 from "./pages/mastertable/l2/showl2"
import Showl3 from "./pages/mastertable/l3/showl3"


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
            {/* l2 */}
            <Route exact path="/showl2/:l1id/:l1name" element={<Showl2></Showl2>}></Route>
            {/* l3 */}
            <Route exact path="/showl3/:l1name/:l2name/:l2id" element={<Showl3></Showl3>}></Route>
          </Routes>
        </div>
        
       
      </div>
    );
}

export default App2