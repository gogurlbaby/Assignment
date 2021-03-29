import Login from '../Login/login'
import Typography from './typography'
import Inputfield from './inputfield'
import Checkbox from './checkbox'
import Navbar from './navbar'
import './home.css'
import Textarea from './textarea'
import Radiobutton from './radiobutton'
import Selectoption from './selectoption'


function Home() {

  return ( 

    <div className="main-div">
      <Navbar />
   
      
      <div className="main">
       <h1 className="wel">Welcome To Premest</h1> 

          <Login />
        
      <div>
        <h4 className="gender">Choose Gender</h4>
          <Radiobutton text="Male" color="green"/>
          <Radiobutton text="Female" />
          <Radiobutton text="Other" />
      </div>
        <br />
      
      <div>
        <h4 className="qualification">Select Qualification</h4>
          <Selectoption />
      </div>
        <br />
      
      <div>
        <h4 className="course">Select Course</h4>
          <Checkbox text="Html" />
          <Checkbox text="JavaScript" />
          <Checkbox text="React" />
      </div>
        <br />
      
       <div>
          <Textarea />
        <br />
        <br />

          <Inputfield />
    
          <Typography text="Become The Best Software Developer!!!" />
       </div>

       </div>
      
       </div> 
      
  )
}

export default Home;