import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { UploadPage } from "./pages/Upload-page";
import { Browse } from "./pages/Browse";
import { Edit } from "./pages/Edit";
import { Authentication } from "./pages/Signin-page";
import CrudTest from "./pages/crud-test-page";




function App() {
  
  return ( 
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/books" element={ <Books/> }/>
    <Route path="/landing" element={ <Landing/> }/>
    <Route path="/upload" element={ <UploadPage/> }/>
    <Route path="/browse" element={ <Browse/> }/>
    <Route path="/edit" element={ <Edit/> }/>
    <Route path="/auth" element={ <Authentication/> }/>
    <Route path="/crudtest" element={ <CrudTest/> }/>


  </Routes>
  )
}

export default App