import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./component/NavBar"
import Rockets from "./component/Rockets"
import Testimonials from "./component/Testimonials"
import Contect from "./component/Contect"
import Footer from "./component/Footer"
import Articles from "./component/Articles"

function App() {
  return (
    <>
     {/* <BrowserRouter> 
     <Navbar/>
     <Articles/>
     <Routes>
      <Route path="/rockte" element={<Rockets/>}/>
      <Route path="/testimonials" element={<Testimonials/>}/>
      <Route path="/contect" element={<Contect/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter> */}
     <Navbar/>
     <Articles/>
     <Rockets/>
     <Testimonials/>
     <Contect/>
     <Footer/>
    </>
  )
}

export default App
