//preserving and resetting State

import { useState } from "react";
//SENZA RENDER CONDIZIONALE, QUINDI SENZA RESET
// export default function App(){
//   const counter=<Counter/>
//   return(
//     <div>
//       {counter}
//       {counter}
//     </div>
//   )
// }


//CON RENDER CONDIZIONALE E 2 COMPONENTI UGUALI
// export default function App(){
//   const[showB,SetShowB]=useState(true);

//   const counter=<Counter/>
//   return(
//     <div>
//       <Counter/>
//       {showB && <Counter/>}
//       <label>
//         <input type="checkbox" checked={showB}
//           onChange={e=>SetShowB(e.target.value)}/>
//           render a second counter
//       </label>
//     </div>
//   )
// }




//CON RENDER CONDIZIONALE E DIFFERENTI COMPONENTI
// export default function App(){
//   const[showB,SetShowB]=useState(true);
//   const [isPaused,setIsPaused]=useState(false)

//   const counter=<Counter/>
//   return(
//     <div>
//       {isPaused?(
//         <p>see you later</p>
//       ):(
//         <Counter/>
//       )}
//       <label>
//         <input type="checkbox" checked={isPaused}
//           onChange={()=>setIsPaused(!isPaused)}/>
//           render a second counter
//       </label>
//     </div>
//   )
// }


//PROBLEMA: STATO CONDIVISO DA 2 DIFFERENTI COUNTER NELLA STESSA POSIZIONE
// export default function ScoreBoard(){
//   const [isPlayerA,setIsPlayer]=useState(true);
//   return(
//     <div>
//       {isPlayerA?(
//         <Counter person='fulvios'/>
//       ):(
//         <Counter person='sandras'/>
//       )}
//       <button onClick={()=>setIsPlayer(!isPlayerA)}>sss</button>
//     </div>
//   )
// }

//SOLUZIONE 1: RENDERIZZARE I 2 COMPIONENTI IN 2 POSIZIONI DIVERSE
// export default function ScoreBoard(){
//   const [isPlayerA,setIsPlayer]=useState(true);
//   return(
//     <div>
//       {isPlayerA && <Counter person="fulvios"/>}
//       {!isPlayerA && <Counter person="sandras"/>}
//       <button onClick={()=>setIsPlayer(!isPlayerA)}>sss</button>
//     </div>
//   )
// }

//SOLUZIONE 2 (MIGLIORE) USA LE CHIAVI CAZZOOOOOOOOOOO
export default function ScoreBoard(){
  const [isPlayerA,setIsPlayer]=useState(true);
  return(
    <div>
      {isPlayerA?(
        <Counter key="fulvios" person='fulvios'/>
      ):(
        <Counter key="sandras" person='sandras'/>
      )}
      <button onClick={()=>setIsPlayer(!isPlayerA)}>sss</button>
    </div>
  )
}


function Counter(){
  const [score,setScore]=useState(0);
  const [hover,setHover]=useState(false);

  let className='counter';
  if(hover){
    className+=' hover';
  }

  return(
    <div className={className} 
      onPointerEnter={()=>setHover(true)}
      onPointerLeave={()=>setHover(false)}>
        <h1>{score}</h1>
        <button onClick={()=>setScore(score+1)}>
          add one
        </button>
    </div>
  )
}