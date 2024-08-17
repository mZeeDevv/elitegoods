import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Trending from './Pages/Trending'
import Profile from './Pages/Profile'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Register from './Pages/Register'
import './App.css'
function App() {

  return (
    <>
   <Router>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/trending' element={<Trending/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/singup' element={<Signup/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/register' element={<Register/>}/>
    
    </Routes>
   </Router>
    </>
  )
}

export default App
