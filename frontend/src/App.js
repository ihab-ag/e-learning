import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigator from "./components/navigator";
import Page from './components/page';
import Login from './components/login';

function App() {

const [page,setPage] = useState('');

  return (
    <BrowserRouter>
      <Navigator pageChange={setPage}/>
      <Routes>
        <Route path='/' element={
          <Login />
        }/>
        <Route path='/admin' element={
          <Page page={page} />
        }/>
        <Route path='/instructor' element={
          <Page page={page} />
        }/>
        <Route path='/student' element={
          <Page page={page} />
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
