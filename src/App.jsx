import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Counter from "./components/Counter/Counter"
import AddImage from "./components/AddPage/AddImage"
import Contact from "./components/Contact/Contact"
import Pay from "./components/PayPage/Pay"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/AddImage" element={<AddImage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="*" element={<h1>No Page</h1>} />
   
      </Routes>
    </BrowserRouter>
  )
}

export default App
