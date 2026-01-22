import { useRef, useState } from 'react';

// export default function Chat() {
//   const [text, setText] = useState('');
//   const [isSending, setIsSending] = useState(false);
//   let timeoutID = useRef(null);

//   function handleSend() {
//     setIsSending(true);
//     timeoutID.current = setTimeout(() => {
//       alert('Sent!');
//       setIsSending(false);
//     }, 3000);
//   }

//   function handleUndo() {
//     setIsSending(false);
//     clearTimeout(timeoutID.current);
//   }

//   return (
//     <>
//       <input
//         disabled={isSending}
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button
//         disabled={isSending}
//         onClick={handleSend}>
//         {isSending ? 'Sending...' : 'Send'}
//       </button>
//       {isSending &&
//         <button onClick={handleUndo}>
//           Undo
//         </button>
//       }
//     </>
//   );
// }









// export default function Toggle() {
// //   const isOnRef = useRef(false);
// const [onOff,setOnOff]=useState(false)

//   return (
//     <button onClick={()=> setOnOff(!onOff) }>
//       {onOff ? 'On' : 'Off'}
//     </button>
//   );
// }






// function DebouncedButton({ onClick, children }) {
//     let timeoutID;
//   return (
//     <button onClick={() => {
//       clearTimeout(timeoutID);
//       timeoutID = setTimeout(() => {
//         onClick();
//       }, 1000);
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function Dashboard() {
  
//   return (
//     <>
//       <DebouncedButton
//         onClick={() => alert('Spaceship launched!')}
//       >
//         Launch the spaceship
//       </DebouncedButton>
//       <DebouncedButton
//         onClick={() => alert('Soup boiled!')}
//       >
//         Boil the soup
//       </DebouncedButton>
//       <DebouncedButton
//         onClick={() => alert('Lullaby sung!')}
//       >
//         Sing a lullaby
//       </DebouncedButton>
//     </>
//   )
// }








//VERSION CON REF DELL'ES 3s
// function DebouncedButton({ onClick, children }) {

//   let timeoutID = useRef(null);

//   return (
//     <button onClick={() => {
//       clearTimeout(timeoutID.current);
//       timeoutID.current = setTimeout(() => {
//         onClick();
//       }, 1000);
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function Dashboard() {
//   return (
//     <>
//       <DebouncedButton
//         onClick={() => alert('Spaceship launched!')}
//       >
//         Launch the spaceship
//       </DebouncedButton>
//       <DebouncedButton
//         onClick={() => alert('Soup boiled!')}
//       >
//         Boil the soup
//       </DebouncedButton>
//       <DebouncedButton
//         onClick={() => alert('Lullaby sung!')}
//       >
//         Sing a lullaby
//       </DebouncedButton>
//     </>
//   )
// } 



















// export default function Chat() {
//   const [text, setText] = useState('');
//   const ref= useRef(null);

//   function handleSend() {
//     ref.current=setTimeout(() => {
//       alert('Sending: ' + text);
//     }, 3000);
//   }

//   return (
//     <>
//       <input
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button
//         onClick={handleSend}>
//         Send
//       </button>
//     </>
//   );
// }



export default function Chat() {
  const [text, setText] = useState('');
  const message = useRef(text);

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + message.current);
    }, 3000);
  }

  function handleMessage(text){
     message.current = text;
     setText(message.current)
  }

  return (
    <>
      <input
        value={text}
        onChange={e => handleMessage(e.target.value)}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
} 