function Textarea(props) {
    return (
        
        <textarea placeholder="Tell us about your experience at Premest" style={{width:280,
                          height:200,
                          marginTop:50,
                          marginLeft:100,
                          borderRadius:10}}>
                        { props.text}
                        
        </textarea>
   
        
  )
}

export default Textarea;
