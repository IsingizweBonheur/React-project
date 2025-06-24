import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Login from "./pages/login";
export default function App(){
  return(
    <div>
      <BrowserRouter>
      <ToastContainer position="top-center"></ToastContainer>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}