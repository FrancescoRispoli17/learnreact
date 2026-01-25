/*

1 triggering
2 rendering
3 committing

*/
 import { useState } from "react";

// export default function Counter(){
//   const [number,setNumber]=useState(0);

//   return(
//     <>
//       <h1>{number}</h1>
//       <button onClick={()=>{
//         // setNumber(number+1);
//         // setNumber(number+1);
//         // setNumber(number+1);
//         // setNumber(number+5)
//         // alert(number)
//         setNumber(number+5)
//         setTimeout(()=>{
//           alert(number);
//         },3000)
//       }}>
//         +5
//       </button>
//     </>
//   )
// }

//  function Counter(){
//   const [number,setNumber]=useState(0);

//   return(
//     <>
//       <h1>{number}</h1>
//       <button onClick={()=>{
//         // setNumber(number+1);
//         // setNumber(number+1);
//         // setNumber(number+1);
//         // setNumber(number+5)
//         // alert(number)
//         setNumber(number+5)
//         setTimeout(()=>{
//           alert(number);
//         },3000)
//       }}>
//         +3
//       </button>
//     </>
//   )
// }

// export default function Form(){
//   const [to,setTo]=useState('Alice');
//   const [message,setMessage]=useState('Hello');
  
//   function handleSubmit(e){
//     e.preventDefault();
//     setTimeout(()=>{
//       alert("sending message to"+ to)
//     },5000)
//   }
//   return(
//     <form onSubmit={handleSubmit}>
//       To:
//         <select
//           value={to}
//           onChange={e=>setTo(a=>a=e.target.value)}>
//             <option value='Alice'>alice</option>
//             <option value='Bob'>bob</option>
//           </select>
//           <textarea 
//             placeholder="Message"
//             value={message}
//             onChange={e=>setMessage(e.target.value)}></textarea>

//         <button type="submit">submit</button>
//     </form>
//   )
// }



// export default function Counter2() {

//     const [number, setNumber] = useState(0);

//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={()=> {
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//                 // setNumber(n=>n+1);
//                 // setNumber(n=>n+1);
//                 // setNumber(n=>n+1);
//             }}>
//                 +3
//             </button>
//         </>
//     )
// } 




function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}


export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(p=>p - 1);
    setCompleted(c=>c + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}