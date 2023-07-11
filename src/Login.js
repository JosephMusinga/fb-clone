import React from 'react'
import './Login.css'
import { Button } from '@mui/material'

function Login() {
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