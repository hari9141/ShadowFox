import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Men from './pages/men'
import Women from './pages/Women'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Glories from './pages/Glories'
import RCBTV from "./pages/RCBTV";
import Statistics from "./pages/Statistics";



export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/tv" element={<RCBTV />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/glories" element={<Glories />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
