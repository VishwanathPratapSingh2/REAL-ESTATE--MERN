import React from 'react' 
import {BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import Signin from './pages/SignnnIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing' 
import Listing from './pages/Listing'
import Search from './pages/Search'

const App = () => {
  return (
   <BrowserRouter> 
    <Header/>
   <Routes>  
    <Route path='/' element={<Home/>}></Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/about' element={<About/>}></Route>  
    <Route path='/search' element={<Search/>}></Route> 
    <Route path='/listing/:listingId' element={<Listing/>}></Route>
    <Route element={<PrivateRoute/>}> 
    <Route path='/profile' element={<Profile/>}></Route> 
    <Route path='/createlisting' element={<CreateListing/>}></Route> 
    <Route path='/updatelisting/:listingId' element={<UpdateListing/>}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
