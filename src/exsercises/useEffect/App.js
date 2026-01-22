import { useEffect, useRef, useState } from 'react';

// export default function MyInput({value,onChange}) {
//   const ref = useRef(null);

//   // TODO: This doesn't quite work. Fix it.
//   useEffect(()=>{
//       ref.current.focus()
//   },[]) 

//   return (
//     <input
//       ref={ref}
//       value={value}
//       onChange={onChange}
//     />
//   );
// }





 function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  // TODO: call focus() only if shouldFocus is true.
  useEffect(() => {
    if(shouldFocus)
        ref.current.focus();
  }, []);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

export default function Form() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');
  const [upper, setUpper] = useState(false);
  const name = firstName + ' ' + lastName;
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your first name:
            <MyInput
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              shouldFocus={true}
            />
          </label>
          <label>
            Enter your last name:
            <MyInput
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              shouldFocus={false}
            />
          </label>
          <p>Hello, <b>{upper ? name.toUpperCase() : name}</b></p>
        </>
      )}
    </>
  );
}








// export async function fetchBio(person) {
//   const delay = person === 'Bob' ? 2000 : 200;
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('This is ' + person + '’s bio.');
//     }, delay);
//   })
// }

// export default function Page() {
//   const [person, setPerson] = useState('Alice');
//   const [bio, setBio] = useState(null);

//   useEffect(() => {
//    let changep=true
//     setBio(null);
//     fetchBio(person).then(result => { closure di javascript
//       if(changep!=false){
//           setBio(result);
//       }

//     });

//     return ()=>changep=false
//   }, [person]);

//   return (
//     <>
//       <select value={person} onChange={e => {
//         setPerson(e.target.value);
//       }}>
//         <option value="Alice">Alice</option>
//         <option value="Bob">Bob</option>
//         <option value="Taylor">Taylor</option>
//       </select>
//       <hr />
//       <p><i>{bio ?? 'Loading...'}</i></p>
//     </>
//   );
// }
