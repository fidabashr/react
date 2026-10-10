import {useState} from 'react'
function Toggle(){
    const[show,setShow]=useState(false);
    return(
        <>
        <button onClick={()=>setShow(!show)}>{show?"Hide":"show"}</button>
        {show && <h1>This is a Text</h1>}
        </>
    )
}
export default Toggle