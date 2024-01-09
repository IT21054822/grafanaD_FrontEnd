import Signup from "./Components/Pages/Signup"
import Signin from "./Components/Pages/Signin"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard"
import Nav_Bar from "./Components/Navbar/Nav_Bar"



function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Nav_Bar/>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
