import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <p>login</p>
        }/>
        <Route path='/admin' element={
          <p>admin</p>
        }/>
        <Route path='/instructor' element={
          <p>instructor</p>
        }/>
        <Route path='/student' element={
          <p>student</p>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
