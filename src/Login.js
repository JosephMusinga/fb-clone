import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from "./firebase_setup/firebase"


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src='https://logowik.com/content/uploads/images/new-facebook-logo-2019.jpg'
                    alt=''
                />
            </div>
            <Button type='submit' onClick=''>
                Sign In
            </Button>
        </div>
    )
}

export default Login