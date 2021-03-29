import { useState } from 'react';


function Login() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
function updateUsername(e){
        setUsername(e.target.value)
}

function updatePassword(e){
        setPassword(e.target.value)
}

function login(e){
        e.preventDefault();
}

      return (
        <form className="login-container">
          <h4 className="login">Login Here</h4>
        <div className="form-group">
          <label>Username</label>
          <input type="text" onChange={updateUsername} className="form-control" placeholder="Username"/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" onChange={updatePassword} className="form-control" placeholder="Password"/>
        </div>

        <button onClick={login}  style={{backgroundColor:" #9c0037",
                                              color: "whitesmoke",
                                              width: 100,
                                              height: 30,
                                              borderRadius:5,
                                              display: "flex",
                                              justifyContent: "center",
                                              alignItems: "center",
                                              marginBottom: 20
                                              }}>Login
       </button>   
            
      </form>
    )
}

export default Login; 