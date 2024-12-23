
import {useState}from 'react';
function Counter(){
 const [x,setx]=useState(0);

return(
    <>
    count:{x}
    <button onClick={()=>setx(x+1)}>Increament</button>
    <button onClick={() => setx(x-1)}>decreament</button>
    </>
)
}

export default Counter;