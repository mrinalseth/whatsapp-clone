import { Button } from '@material-ui/core'
import React, {useContext, useEffect} from 'react'
import './login.css'
import {auth, provider} from '../firebase'
import {Context as AuthContext} from '../context/AuthContext'

const Login = () => {
    const {login, localSignin} = useContext(AuthContext)
    useEffect(() => {
        const fetch = async () => {
            await localSignin()
        }
        fetch()
    }, [])
    const signin = async() => {
        try {
            const result = await auth.signInWithPopup(provider)
            login(result.user)
        }catch(err) {
            console.log(err.message)
        }
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://bit.ly/3A7hJe2" alt="" />
                <div className="login__text">
                    <h1>Sign in to whatsApp</h1>
                </div>
                <Button type="submit" onClick={signin} >
                    Sign in with google
                </Button>
            </div>
        </div>
    )
}

export default Login
