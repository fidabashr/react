import {useEffect, useState} from 'react';
function App(){
   const [name,setname]=useState("");
   const [user,setUser]=useState(null)
   useEffect(()=>{
     if (name === "") {
      setUser(null);
      return;}

fetch( `https://dummyjson.com/users/search?q=${name}`)
    .then(data=>data.json())
    .then(dt=>setUser(dt.users[0]))
   },[name])
   
   
   return(
    <div>
      <input value={name} onChange={(e)=>setname(e.target.value)}/>
      {
        user && (<div><h1>{user.firstName} {user.lastName}</h1>
        <img src={user.image} alt="User" width="200"/>
        </div>)
      }
    </div>
   )
}
export default App