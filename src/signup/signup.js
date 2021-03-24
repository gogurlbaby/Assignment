import {useState} from 'react'
import {Link} from 'react-router-dom'
import React from 'react';


function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function updateUsername(e) {
        setUsername(e.target.value)
    }

    function updateEmail(e) {
        setEmail(e.target.value)
    }
    function updatePassword(e) {
        setPassword(e.target.value)
    }

    function signup(e) {
        e.preventDefault();
    }       

    return ( 
        <form className="signup-container">
        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" onChange={updateUsername} placeholder="Username"/>
        </div>
<br/>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" onChange={updateEmail} placeholder="Email"/>
        </div>
        <br/>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" onChange={updatePassword}placeholder="Password"/>
        </div>
        <br/>
        <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm Password"/>
        </div>
        <br/>
        <button className="signup" onClick={signup}>SignUp</button>            
        <Link to = "/signin" className="already">Already Have An Account?</Link>
    </form>
    )
}

export default Signup;