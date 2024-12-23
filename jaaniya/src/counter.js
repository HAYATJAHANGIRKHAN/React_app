import { useState } from "react";

// import {useState}from 'react';
// function Counter(){
//  const [x,setx]=useState(0);

// return(
//     <>
//     count:{x}
//     <button onClick={()=>setx(x+1)}>Increament</button>
//     <button onClick={() => setx(x-1)}>decreament</button>
//     </>
// )
// }

// export default Counter;

function Counter(){
    const[x,setx]=useState(0);
    if(x==10){
        alert("reached 10");
        setx(0);
        return null;  // to avoid rendering the rest of the component
    } else if(x==-1){
        alert("reached -1");
        setx(0);
        return null;  // to avoid rendering the rest of the component
    }
    return(
        <>
        count{x} is {(x%2==0)? 'even':'odd'}
        <button onClick={()=>setx(x+1)}>inc</button>
        <button onClick={()=>setx(x-1)}> dec</button>
        <button onClick={()=>setx(0)}>reset</button>
       

        
        </>
    )
}

export default Counter;