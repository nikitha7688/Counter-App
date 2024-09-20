import { useState } from "react"

function Counter(){

   var [count,setCount] = useState(0)

   function increment()
   {
      
      setCount(count+1)
   }

   function decrement()
   {
      
     setCount(count-1)
   }

   return(<div class="card">
      <center><h1>Counter App</h1></center>
    <h1 class="count">{count}</h1>
    <button class="button"  onClick={increment}>Increment</button>
    <button  class="button"  onClick={decrement}>Decrement</button>
    
   </div>)
}

export default Counter