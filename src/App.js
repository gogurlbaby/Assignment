import { Switch, Route } from 'react-router-dom';
import Signup from './signup/signup'
import Login from './signup/login'
import './signup/signup.css'
import Navbar from './signup/navbar'

function App() {
  return (
  
    <div className="main">

<Navbar/>
<Switch>
        <Route exact path="/" component={Signup}/>
        <Route exact path="/signin" component={Login} />
        </Switch>
    
    </div>
  );
}

export default App;
