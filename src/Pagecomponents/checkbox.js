
function Checkbox(props) {
    
    return (
        <div>
        <input type= "checkbox" style={{width:15, 
                                       height:15,
                                       marginTop:40
                                       }}/>
                                       {props.text}
        </div>
  )
}

export default Checkbox;
