function Textarea(props) {
    return (
        
        <textarea placeholder="Tell us about your experience at Premest" 
                   style={{width:250,
                          height:200,
                          marginTop:50,
                          marginLeft:100,
                          marginRight:80,
                          borderRadius:10}}>
                        { props.text}
                        
        </textarea>
   
        
  )
}

export default Textarea;
