
function Radiobutton(props) {
    return (
        <div>
        <input type= "radio" style={{width:15, 
                                     height:15,
                                     marginTop:20
                                     }}/>
                                     {props.text}
        </div>
  )
}

export default Radiobutton;

