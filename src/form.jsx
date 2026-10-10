import {useState} from 'react'
function formValid(){
    const[form,setForm]=useState({
      name:"",
      email:"",
      password:""
    });
    const[error,setError]=useState("");
    function change(event){
     const {name,value}=event.target;
     setForm(prev=>({...prev,
      [name]:value
     }))
    }
    const newError={}
    function handleSubmit(event){
     event.preventDefault()
     if(form.name.trim()===""){
       newError.name="Name is Required";
       
     } 
     if(form.email.trim()===""){
     newError.email="email is required";
      if(form.password.length<8){
       newError.password="Password must be 8 character";
      }
      setError(newError);
      if(Object.keys(newError).length==="0"){
        console.log("form Submitted",form)
      }
     }
    }
    return(
      <form onSubmit={handleSubmit}>
        <div><input name="name" value={form.name} onChange={change}/>
        {error.name && <p>{error.name}</p>}</div>
        <div><input name="email" value={form.email} onChange={change}/>
        {error.email && <p>{error.email}</p>}</div> 
        
        <div> <input name="password" type='password' value={form.password} onChange={change}/>
        {error.password && <p>{error.password}</p>}</div>
       
        <button type='submit'>Submit</button>
        
      </form>
    )
}
export default formValid