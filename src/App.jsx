import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Navbar } from "./Components/Navbar";


function App() {


  return (
    <>
      <HashRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/location" element={<Location/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

        </Routes>

      </HashRouter>
    </>
  )
}

export default App
