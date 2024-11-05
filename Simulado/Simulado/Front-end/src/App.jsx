import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import Area from "./component/Area";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Area />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
