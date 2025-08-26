import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Main from './components/Main'
import Footer from './components/Footer'
import TermsConditions from './components/TermsConditions'
import Privacy from './components/Privacy'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<><Form /><Main /></>} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* <Route path="/do-not-sell" element={<DoNotSell />} /> */}
      </Routes>
    <Footer />
    </>
  )
}

export default App