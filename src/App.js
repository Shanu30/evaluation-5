import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Nav from './components/Nav'
import User from './components/User'

function App() {
  return (

      <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="Login" element={<Login />} />
          <Route path="User" element={<User />} />
      </Routes>
  );
}

export default App;
