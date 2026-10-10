import {useState} from 'react';
function counter(){
const[count,setCount]=useState(0);
function inct(){
  if(count<10){
    setCount(count+1)
  }else{
    setCount(count+2)
  }}
  function decs(){
    if(count<=10){
      setCount(count-1)
    }else{
      setCount(count-2)
    }
  }



return(
  <div>
  <h1>{count}</h1>
  <button onClick={inct}>inc</button>
  <button onClick={decs}>dec</button>
  </div>
)

}
export default counter