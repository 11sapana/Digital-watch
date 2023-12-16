import { useState } from "react";



function Main(){
    let time = new Date ().toLocaleTimeString();
    const  [curentTime,setcurentTime] = useState(time)
   const  updatetime = () =>{
    let time = new Date ().toLocaleTimeString();
    setcurentTime(time)

   }

   
   
  
return(
    <>
    <div className="digital_watch">
<h1>{curentTime}</h1>
<button onClick={updatetime}> Get start</button> 
    
</div>
  
  </>
)

}
export default Main;