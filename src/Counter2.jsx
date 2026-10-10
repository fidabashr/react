import {useState} from 'react'
function App(){
const[count,setCount]=useState(0)
const [counter1,setCounter1]=useState(0);
const [counter2,setCounter2]=useState(0);
function inc(){
if(count%2===0){
  setCounter1(count+1)
}else{
    setCounter2(count+1)
}setCount(count+1)
}
function dec(){
if(count%2===0){
  setCounter1(count-1)
}else{
    setCounter2(count-1)
}setCount(count-1)
}
function reset(){
    setCount(0)
    setCounter1(0)
    setCounter2(0)
}

return(
    <div >
       <h1>{counter1}</h1>
       <h1>{counter2}</h1>
       <button onClick={inc}>inc</button>
       <button onClick={dec}>dec</button>
       <button onClick={reset}>reset</button>
    </div>
)
}
export default App