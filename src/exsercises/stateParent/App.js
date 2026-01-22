import { useState } from 'react';

// export default function SyncedInputs() {
//     const [text, setText] = useState('');
//   return (
//     <>
//       <Input label="First input" text={text} onChange={(e)=>setText(e.target.value)}/>
//       <Input label="Second input" text={text} onChange={(e)=>setText(e.target.value)}/>
//     </>
//   );
// }

// function Input({ label,text,onChange }) {


//   return (
//     <label>
//       {label}
//       {' '}
//       <input
//         value={text}
//         onChange={onChange}
//       />
//     </label>
//   );
// }










// export const foods = [{
//   id: 0,
//   name: 'Sushi',
//   description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
// }, {
//   id: 1,
//   name: 'Dal',
//   description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
// }, {
//   id: 2,
//   name: 'Pierogi',
//   description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
// }, {
//   id: 3,
//   name: 'Shish kebab',
//   description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
// }, {
//   id: 4,
//   name: 'Dim sum',
//   description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
// }];

// export default function FilterableList() {
//     const [query, setQuery] = useState('');
//   return (
//     <>
//       <SearchBar query={query} onChange={(e)=>setQuery(e.target.value)}/>
//       <hr />
//       <List items={foods} query={query}/>
//     </>
//   );
// }

// export function filterItems(items, query) {
//   query = query.toLowerCase();
//   return items.filter(item =>
//     item.name.split(' ').some(word =>
//       word.toLowerCase().startsWith(query)
//     )
//   );
// }


// function SearchBar({query,onChange}) {
//   return (
//     <label>
//       Search:{' '}
//       <input
//         value={query}
//         onChange={onChange}
//       />
//     </label>
//   );
// }

// function List({ items,query }) {
//     items=filterItems(items,query)
//   return (
//     <table>
//       <tbody>
//         {items.map(food => (
//           <tr key={food.id}>
//             <td>{food.name}</td>
//             <td>{food.description}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }











export default function SyncedInputs() {
    const [text, setText] = useState(0);

    function handleChageC(value,label){
      setText(value)
      
    }
    
  return (
    <>
      <Input label="Celsius" grado={grado} text={text} onChange={(e)=>handleChage(e.target.value,e.target.label)}/>
      <Input label="Fahrenheit" grado={grado} text={text} onChange={(e)=>handleChage(e)}/>
    </>
  );
}

function Input({ label,text,onChange,grado }) {


  return (
    <label>
      {label}
      {' '}
      <input
        value={grado=='Celsius' ?parseFloat(text)+2 :parseFloat(text)+3}
        onChange={onChange(grado)}
      />
    </label>
  );
}









// export default function Converter(){
//     const [number,setNumber] = useState(0);

//     function change(e,far){
//         if(far){
//             let far = (e.target.value-32)*(5/9);
//             setNumber(far);
//         }else{
//             setNumber(e.target.value)
//         }
//     }

//     return(<div>
//         <input label="celsius" value={number} onChange={(e)=>change(e,false)} />
//         <input label="farenotte" value={(number*(9/5))+32} onChange={(e)=>change(e,true)} />
//     </div>);
// }











// export default function Temperature() {
//   const [celsius, setCelsius] = useState('');
//   const fahrenheit =
//     celsius === '' ? '' : (celsius * 9 / 5 + 32);

//   function handleCelsiusChange(value) {
//     setCelsius(value);
//   }

//   function handleFahrenheitChange(value) {
//     const c = (value - 32) * 5 / 9;
//     setCelsius(value === '' ? '' : c);
//   }

  
//   return (
//     <>
//       <Input
//         label="Celsius"
//         value={celsius}
//         onChange={handleCelsiusChange}
//       />
//       <Input
//         label="Fahrenheit"
//         value={fahrenheit}
//         onChange={handleFahrenheitChange}
//       />
//     </>
//   );
// }


// function Input({ label, value, onChange }) {
//   function handleChange(e) {
//     onChange(e.target.value);
//   }

//   return (
//     <label>
//       {label}:{' '}
//       <input
//         type="number"
//         value={value}
//         onChange={handleChange}
//       />
//     </label>
//   );
// } 