
function Selectoption(props) {
    return (
    <div>
        <select style={{backgroundColor:"#9c0037",
                        color:"whitesmoke",
                        width: 100,
                        height:50,
                        marginTop:20,
                        borderRadius:7}}>
            <option>Qualification</option>
            <option>Degree</option>
            <option>Diploma</option>
            <option>HND</option>
            <option>Other</option>
        </select>
    </div>
  )
}

export default Selectoption;
