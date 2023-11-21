import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from "firebase/auth"
import { auth } from "./firebase"
import { LogOut } from 'react-feather';



function App() {


  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname="/login"
    })

  }


  return (

    <Router>
      <nav>
        <Link style={{ textDecoration: "none", color: "white" }} to='/'>Home</Link>
        {!isAuth ? (<Link style={{ textDecoration: "none", color: "white" }} to='/login'>login</Link>) :
         (
          <>
          <Link style={{ textDecoration: "none", color: "white" }} to='/createpost'>createpost</Link>

         <Button  variant='' className='text-white' onClick={signUserOut}>Logout<LogOut></LogOut></Button>
         </>
         )}

      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}></Home>} ></Route>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}></CreatePost>} ></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}></Login>} ></Route>

      </Routes>
    </Router>
  );
}

export default App;