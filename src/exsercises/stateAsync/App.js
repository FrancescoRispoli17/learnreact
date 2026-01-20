import { useState } from 'react';

// export default function TrafficLight() {
//   const [walk, setWalk] = useState(true);

//   function handleClick() {
//     alert(walk? 'prossimo stato: stop':'prossimo stato:walk')
//     setWalk(!walk);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Change to {walk ? 'Stop' : 'Walk'}
//       </button>
//       <h1 style={{
//         color: walk ? 'darkgreen' : 'darkred'
//       }}>
//         {walk ? 'Walk' : 'Stop'}
//       </h1>
//     </>
//   );
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