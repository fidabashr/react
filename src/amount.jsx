// Create an input field, a select dropdown with Expense and Income as options, 
// and an Add button. When the user enters an amount, selects an option, 
// and clicks the Add button,
//  the amount should be added to the corresponding list.
//  Display two separate lists for expenses and income, along with the total amount for each.
import{useState} from 'react'
function App(){
const[amount,setAmnt]=useState("")
const [expns,setExpns]=useState([])
const[income,setIncome]=useState([])
const[optn,setOptn]=useState("")
function handle(){
    if (optn==="Expense"){
        setExpns([...expns,Number(amount)])
    }else if(optn==="Income"){
        setIncome([...income,Number(amount)])
    }else 
        return;
     
}


return(
    <>
  
 
    <input type='Number' value={amount} onChange={(e)=>setAmnt(e.target.value)}/>
      <br/>
     <br/>
     <select value={optn} onChange={(e)=>setOptn(e.target.value)}>
    <option value="Expense">Expense</option>
    <option value="Income">Income</option>
   </select>
   <button onClick={handle}>Add</button>
   <h1>Expense</h1>
   <ul>
    {expns.map((ex,index)=>(<li key={index}>{ex}</li>))}
   </ul>
   <h1>{expns.reduce((sum,ex)=>{return sum+ex;},0)}</h1>
   <h1>Income</h1>
   <ul>
    {income.map((inc,index)=>(<li key={index}>{inc}</li>))}
   </ul>
   <h1>{income.reduce((inc,sum)=>{return inc+sum},0)}</h1>
    </>
)
}
export default App