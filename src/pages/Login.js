import React from 'react'
import { Button } from 'react-bootstrap'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function Login({ setIsAuth }) {
    let navigate=useNavigate()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth",true)
            setIsAuth(true)
            navigate("/")

        })
    }
    return (
        <div style={{textAlign:'center'}} className='loginpage shadow-lg py-5'>
            <h4 className=''><b>Sign In With Google to Continue</b></h4>
            <Button variant='' className='login-with-google-btn  w-25' onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}

export default Login