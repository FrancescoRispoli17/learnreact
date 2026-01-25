import { useRef, useState } from "react";

// export default function Counter(){
//     let ref=useRef(0);

//     function handleClick(){
//         ref.current= ref.current+1;

//         alert('your have clicked '+ ref.current)
//     }

//     return <button onClick={handleClick}>click</button>
// }


//scheduling a task in javascript

export default function StopDefault(){
    const [startTime,setStartTime]=useState(null);
    const [now,setNow]=useState(null);
    const intervalRef=useRef(null);

    function handleStart(){
        setStartTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current)
        intervalRef.current= setInterval(()=>{
            setNow(Date.now());
        },10);
    }
    function handleStop(){
        clearInterval(intervalRef.current)
    }
    let secondsPassed=0;
    if(startTime!=null && now!=null)
        secondsPassed=(now-startTime)/1000;

    return(
        <>

        <h1>time passer: {secondsPassed}</h1>

        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        </>
    )

}