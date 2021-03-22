
function Signup() {

    return ( 
        <form className="main">
        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control"/>
        </div>
<br/>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control"/>
        </div>
        <br/>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control"/>
        </div>
        <br/>
        <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control"/>
        </div>
        <br/>
        <button className="signup">Signup</button>            
    </form>
    )
}

export default Signup;