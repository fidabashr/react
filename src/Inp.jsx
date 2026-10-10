import {useState} from 'react';
function App(){
   const[nums,setNums]=useState([]);
   const [news,setNews]=useState(0);
   function add(){
    setNums([...nums,Number(news)])
    setNews("")
   }

return(
   <div>
   <input type="number" value={news} onChange={(e)=>setNews(e.target.value)} placeholder="Enter a number" />
   <button onClick={add}>Add</button>
   <h4>Even</h4>
   <ul>
   {nums.map((num,index)=>{
      if(num%2==0){
         return <li key={index} style={{ color: num > 100 ? "green" : undefined }}>{num}</li>
      }
   })}
   </ul>
   <h4>Odd</h4>
   <ul>{nums.map((num,index)=>{
      if(num%2!==0){
         return <li key={index} style={{ color: num > 100 ? "red" : undefined }}>{num}</li>
      }
   })}
   </ul>

   </div>
)
}
export default App