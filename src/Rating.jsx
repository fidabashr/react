import {useState} from 'react';
function Rating(){
    const [star,setStar]=useState(["☆","☆","☆","☆","☆"]);
    const [rate,setRate]=useState("")
    function select(index){
       const newStar=star.map((str,i)=>
    {if(i<=index){
     return "★"
    }else
        {return "☆"}
    })
   setStar(newStar);
setRate(index+1)
}

return(
   <div>
    <h1>{star.map((str,index)=>(<span onClick={()=>select(index)} key={index}>{str}</span>))}</h1>
    <h1>Rating {rate}</h1>
   </div>
)
}
export default Rating