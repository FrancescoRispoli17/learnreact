 import { useState } from 'react';
import { useImmer } from "use-immer";

// const initialProducts = [{
//   id: 0,
//   name: 'Baklava',
//   count: 1,
// }, {
//   id: 1,
//   name: 'Cheese',
//   count: 5,
// }, {
//   id: 2,
//   name: 'Spaghetti',
//   count: 2,
// }];

// export default function ShoppingCart() {
  
//   const [
//     products,
//     setProducts
//   ] = useState(initialProducts)

//   function handleIncreaseClick(productId) {
//     const increaseproduct=products.map(p=>{
//         if(p.id===productId){
//             console.log(p.id)
//             return{
//             ...p,
//             count:p.count+1
//         }
//         }else
//              return p
//         });
        
//     setProducts(
//         increaseproduct,
//     )
//   }

//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>
//           {product.name}
//           {' '}
//           (<b>{product.count}</b>)
//           <button onClick={() => {
//             handleIncreaseClick(product.id);
//           }}>
//             +
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }



// const initialProducts = [{
//   id: 0,
//   name: 'Baklava',
//   count: 1,
// }, {
//   id: 1,
//   name: 'Cheese',
//   count: 5,
// }, {
//   id: 2,
//   name: 'Spaghetti',
//   count: 2,
// }];

// export default function ShoppingCart() {
//   const [
//     products,
//     setProducts
//   ] = useState(initialProducts)

//   function handleIncreaseClick(productId) {
//     setProducts(products.map(product => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           count: product.count + 1
//         };
//       } else {
//         return product;
//       }
//     }))
//   }

//   function handleLessClick(productId) {
//     setProducts(products.map(product => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           count: product.count - 1
//         };
//       } else {
//         return product;
//       }
//     }).filter(p=>p.count>0))
//   }

//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>
//           {product.name}
//           {' '}
//           (<b>{product.count}</b>)
//           <button onClick={() => {
//             handleIncreaseClick(product.id);
//           }}>
//             +
//           </button>
//           <button onClick={() => {
//             handleLessClick(product.id);
//           }}>
//             –
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }







//  function TaskList({
//   todos,
//   onChangeTodo,
//   onDeleteTodo
// }) {
//   return (
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>
//           <Task
//             todo={todo}
//             onChange={onChangeTodo}
//             onDelete={onDeleteTodo}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Task({ todo, onChange, onDelete }) {
//   const [isEditing, setIsEditing] = useState(false);
//   let todoContent;
//   if (isEditing) {
//     todoContent = (
//       <>
//         <input
//           value={todo.title}
//           onChange={e => {
//             onChange({
//               ...todo,
//               title: e.target.value
//             });
//           }} />
//         <button onClick={() => setIsEditing(false)}>
//           Save
//         </button>
//       </>
//     );
//   } else {
//     todoContent = (
//       <>
//         {todo.title}
//         <button onClick={() => setIsEditing(true)}>
//           Edit
//         </button>
//       </>
//     );
//   }
//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={todo.done}
//         onChange={e => {
//           onChange({
//             ...todo,
//             done: e.target.checked
//           });
//         }}
//       />
//       {todoContent}
//       <button onClick={() => onDelete(todo.id)}>
//         Delete
//       </button>
//     </label>
//   );
// }

// function AddTodo({ onAddTodo }) {
//   const [title, setTitle] = useState('');
//   return (
//     <>
//       <input
//         placeholder="Add todo"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />
//       <button onClick={() => {
//         setTitle('');
//         onAddTodo(title);
//       }}>Add</button>
//     </>
//   )
// }


// let nextId = 3;
// const initialTodos = [
//   { id: 0, title: 'Buy milk', done: true },
//   { id: 1, title: 'Eat tacos', done: false },
//   { id: 2, title: 'Brew tea', done: false },
// ];

// export default function TaskApp() {
//   const [todos, setTodos] = useState(
//     initialTodos
//   );

//   function handleAddTodo(title) {
//     setTodos([
//         ...todos,
//         {
//             id:nextId+1,
//             title:title,
//             done:false

//         }
//     ])}

//   function handleChangeTodo(nextTodo) {
    
//     setTodos(todos.map(todo=>{
//         if(todo.id===nextTodo.id){
//             return {
//                 ...todo,
//                 title:nextTodo.title,
//                 done:nextTodo.done
//             }
//         }else return todo
//     }))
//   }

//   function handleDeleteTodo(todoId) {
//     setTodos(todos.filter(todo => todo.id!=todoId ))
//     // const index = todos.findIndex(t =>
//     //   t.id === todoId
//     // );
//     // todos.splice(index, 1);
//   }

//   return (
//     <>
//       <AddTodo
//         onAddTodo={handleAddTodo}
//       />
//       <TaskList
//         todos={todos}
//         onChangeTodo={handleChangeTodo}
//         onDeleteTodo={handleDeleteTodo}
//       />
//     </>
//   );
// }





 function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}

function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}


let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useImmer(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos(draft=>{
        draft.push({
            id:nextId+1,
            title:title,
            done:false
        })
        
    })
}

  function handleChangeTodo(nextTodo) {
    setTodos(draft=>{
        const todo = draft.find(a => 
            a.id === nextTodo.id)
        todo.title=nextTodo.title;
        todo.done=nextTodo.done;
    })
  }

  function handleDeleteTodo(todoId) {
    setTodos(draft=>{
        const index=draft.findIndex(t=>t.id===todoId)
        draft.splice(index,1)
    })
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

