
function Login() {
    
 return (
    <form className="signin-container">
       
        <div className="signin-form-group">
            <label>Username</label>
            <input type="text" className="signin-form-control" placeholder="Username"/>
        </div>

        <div className="signin-form-group">
            <label>Password</label>
            <input type="password" className="signin-form-control" placeholder="Password"/>
        </div>
        <button className="signin">Sign In</button>    
          
    </form>
)
}


export default Login;