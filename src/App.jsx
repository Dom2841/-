import React from 'react'
import { Routes, Route , Link } from 'react-router'
import Home from './pages/Home'
import About from './pages/About';
import Notfound from './pages/Notfound';
export default function App() {
  return (
    <div>
      <Link to="/">หน้าเเรก</Link>
      <Link to="/about">เกี่ยวกับ</Link>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Notfound />}/>
    </Routes>
    </div>
  );
}
