import {useState} from 'react'
function App(){
    const[todos,setTodos]=useState([]);
    const[task,setTask]=useState("");
    const[editIndex,setEditIndex]=useState(null);
    const[search,searched]=useState("");
function add(){
    setTodos([...todos,task]);
    setTask(" ");
}
function del(index){
    const newTodo=todos.filter((todo,i)=>i!==index)
    setTodos(newTodo)
}
function edit(index){
    setTask(todos[index])
   setEditIndex(index)
}
function update(){
    const newTodos=todos.map((todo,i)=>{
        if(i===editIndex){
            return task
        }else{
            return todo
        }
    })
    setTodos(newTodos)
    setTask("")
    setEditIndex(null)
}

    return(
        <div>
            <input type='search' value={search} onChange={(e)=>searched(e.target.value)} />
            {search!=="" && todos.map((todo,index)=>{
              if  (todo.toLowerCase().includes(search.toLowerCase())){
                 return (<li key={index}> {todo}
                 <button onClick={()=>del(index)}>del</button> 
                <button onClick={()=>edit(index)}>edit</button>
                 
                 </li>)
              }return null;
                
            })}
             <br/>
             <br/>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
            {editIndex===null? <button onClick={add}>Add</button>: <button onClick={update}>Update</button>}
           
            <ul>{todos.map((todo,index)=>(<li key={index}>{todo}
                <br/><button onClick={()=>del(index)}>del</button>
                <button onClick={()=>edit(index)}>edit</button>
            </li>))}</ul>
        </div>
    )
}
export default App