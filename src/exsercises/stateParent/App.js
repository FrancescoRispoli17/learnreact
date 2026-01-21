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










export const foods = [{
  id: 0,
  name: 'Sushi',
  description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
}, {
  id: 1,
  name: 'Dal',
  description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
}, {
  id: 2,
  name: 'Pierogi',
  description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
}, {
  id: 3,
  name: 'Shish kebab',
  description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
}, {
  id: 4,
  name: 'Dim sum',
  description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
}];

export default function FilterableList() {
    const [query, setQuery] = useState('');
  return (
    <>
      <SearchBar query={query} onChange={(e)=>setQuery(e.target.value)}/>
      <hr />
      <List items={foods} query={query}/>
    </>
  );
}

export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}


function SearchBar({query,onChange}) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items,query }) {
    items=filterItems(items,query)
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
















export default function SyncedInputs() {
    const [text, setText] = useState('');
  return (
    <>
      <Input label="First input" text={text} onChange={(e)=>setText(e.target.value)}/>
      <Input label="Second input" text={text} onChange={(e)=>setText(e.target.value)}/>
    </>
  );
}

function Input({ label,text,onChange }) {


  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onChange}
      />
    </label>
  );
}