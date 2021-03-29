
function Inputfield(props) {
    return (
        <div>
        <input type= "text" placeholder="What is your suggestion to make Premest better." 
                            style={{width:280, 
                                    height:50,
                                    marginTop:30,
                                    marginLeft:100,
                                    borderRadius:6}}/>
                                   {props.text} 
        </div>
  )
}

export default Inputfield;
