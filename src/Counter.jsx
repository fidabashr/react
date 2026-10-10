import {useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0)


    return(
        <div style={{textAlign:"center"}}>
            <h1> Counter App </h1>
            <h1 >{count}</h1>
            <button style={{marginRight:"10px",backgroundColor:"green"}}onClick={()=>setCount(prev=>prev+1)}>Increment</button>
            <button style={{marginRight:"10px",backgroundColor:"red"}}onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
            <button style={{backgroundColor:"blue"}}onClick={()=>setCount(0)}>Reset</button>

        </div>
    )
}
export default Counter