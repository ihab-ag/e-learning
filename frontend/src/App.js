import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigator from "./components/navigator";

function App() {

const [page,setPage] = useState('');

  return (
    <BrowserRouter>
      <Navigator pageChange={setPage}/>
      <Routes>
        <Route path='/' element={
          <p>login</p>
        }/>
        <Route path='/admin' element={
          <></>
        }/>
        <Route path='/instructor' element={
          <></>
        }/>
        <Route path='/student' element={
          <></>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
