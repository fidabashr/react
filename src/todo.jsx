import {useState} from 'react';
function App(){
const [task,setTask]=useState("")
const[todos,setTodos]=useState([])
function add(){
    setTodos([...todos,task])
    setTask("")
}
function del(index){
    const newTodo=todos.filter((todo,i)=>i!==index);
        setTodos(newTodo)
    
}
return(
    <div>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={add}>Add</button>
        <ul>
            {todos.map((todo,index)=>(<li key={index}>{todo}
                <button onClick={()=>del(index)}>Del</button>
            </li>))}
        </ul>
    </div>
)
}
export default App