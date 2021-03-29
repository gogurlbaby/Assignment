
function Typography(props) {

    return (
        <p style={{ color:"whitesmoke", 
                    fontSize: 20,
                    display:"flex",
                    justifyContent:"center",
                    alignContent:"center",
                    alignItems:"center"}}>
                    {props.text}
        </p>
    )
}

export default Typography