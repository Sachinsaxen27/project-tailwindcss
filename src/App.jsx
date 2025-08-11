import AboutPage from "./Component/AboutPage"
import HomePage from "./Component/HomePage"
import NavBar from './Component/NavBar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ServicePage from "./Component/ServicePage"
import CareerPage from "./Component/CareerPage"
function App() {
  return (
    <>
      <Router>

        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/about" element={<AboutPage/>}></Route>
          <Route exact path="/service" element={<ServicePage/>}></Route>
          <Route exact path="/career" element={<CareerPage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
