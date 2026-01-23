import { useState } from 'react';

// export default function App() {
//   const [showHint, setShowHint] = useState(false);
   
//     return (
//       <div>
//         {showHint && <p><i>Hint: Your favorite city?</i></p>}
//         <Form />
//         <button onClick={() => {
//           setShowHint(!showHint);
//         }}>Hide hint</button>
//       </div>
//     );
  

// }

// function Form() {
//   const [text, setText] = useState('');
//   return (
//     <textarea
//       value={text}
//       onChange={e => setText(e.target.value)}
//     />
//   );
// }

export default function App() {
  const [reverse, setReverse] = useState(false);
  
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  return(
    <div>
        {!reverse?(
            <>
                <Field key={'ln'} label="First name" />
                <Field key={'fn'} label="Last name" /> 
            </>
        ):(
            <>
                <Field key={'fn'} label="Last name" /> 
                <Field key={'ln'} label="First name" />
            </>
        
        )}
        {checkbox}

    </div>
  )
  
}

function Field({ keys,label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        key={keys}
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}
