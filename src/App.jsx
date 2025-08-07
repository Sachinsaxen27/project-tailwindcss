import AboutPage from "./Component/AboutPage"
import HomePage from "./Component/HomePage"
import NavBar from './Component/NavBar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Router>

        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/about" element={<AboutPage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
