import React from 'react';
import './App.css';
import Login from "./component/Login"
import Profile from "./component/Profile"
import ForgotPass from './component/ForgotPass';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/forgot' element={<ForgotPass />} />
      </Routes>
    </div>
  );
}

export default App;
