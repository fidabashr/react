import {useState} from 'react'
function Box(){

const [clr,setClr]=useState("");
 function change(){
    setClr()
 }

    return(
        <><div style={{height:"100px",
         border:"1px solid grey",
         borderRadius:"30px", 
         textAlign:'center'}}>
            <button style={{margin:"20px",backgroundColor:"red",width:'50px',height:'50px'}} 
            onClick={()=>setClr("red")}>red</button>
            <button style={{margin:"50px",backgroundColor:"blue",width:'50px',height:'50px'}}
            onClick={()=>setClr("blue")}>blue</button>
            <button style={{margin:"50px",backgroundColor:"green",width:'50px',height:'50px'}}
            onClick={()=>setClr("green")}>green</button>
            <button style={{margin:"50px",backgroundColor:"orange",width:'50px',height:'50px'}}
            onClick={()=>setClr("orange")}>orange</button>
            <button style={{margin:"50px",backgroundColor:"grey",width:'50px',height:'50px'}}
            onClick={()=>setClr("grey")}>grey</button>

           
        </div>
        <div style={{ margin:'20px',backgroundColor:clr,height:'400px',border:"1px solid grey",
         borderRadius:"5px", }}>

        </div></>
        
    )
}
export default Box