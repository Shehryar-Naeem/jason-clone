import React from "react";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Navlinks from "./Component/Navlinks";
import Home from "./Component/pages/Home"
import Contact from "./Component/pages/Contact";
import About from "./Component/pages/About"
import Adduser from "./AddUsers/AddUser"
import EditUser from "./AddUsers/EditUser"
import ErrorPage from "./Component/pages/Error"
import ViewUser from "./AddUsers/ViewUser";

const App =()=>{
  return (
    <>
      <BrowserRouter>
        <Navlinks/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/users/add" element={<Adduser/>}/>
          <Route path="/users/edit/:id" element={<EditUser/>}/>
          <Route path="/users/view/:id" element={<ViewUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;