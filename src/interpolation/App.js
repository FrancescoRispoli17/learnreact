// JSX RULES (mixture between javascript + html)

// export default function TodoList(){
//   return (
//     <>
//       <h1>Todo List</h1>
//       <img src="https://i.imgur.com/yXOvdOSs.jpg" className="photo" />
//       <ul>
//         <li>p1</li>
//         <li>p2</li>
//       </ul>
//     </>
//   )
// }

//curl

export default function Avatar(){
  const avatar='https://i.imgur.com/yXOvdOSs.jpg';
  const description="new img";
  return (
    <>
      <img src={avatar} className="avatar" alt={description}/>
      <TodoList></TodoList>
      <Today></Today>
      <TodoList3></TodoList3>
    </>
  )
}

export function TodoList(){
  const name="fulvios";
  return(
    <>
    
    <h1>{name}'s To Do List</h1>
    </>
  )
}

const today=new Date();
function formatDate(date){
  return new Intl.DateTimeFormat('en-US',{weekday:'long'}).format(date);
}

export function Today(){
  return(
    <h1>Todo list for {formatDate(today)}</h1>
  )
}

export function TodoList3(){
  let bc='black';
  let s={
    backgroundColor:bc,
    color:'pink'
  }
  return (
    <ul style={s}>
      <li>point1</li>
      <li>point2</li>
    </ul>

  )
}

const person={
  name:"fulvios",
  theme:{
    backgroundColor:"black",
    color:'pink'
  }
}

export function TodoList4(){
  return (
    <div style={person.theme}>
      <h1>Todo list 4 {person.name}</h1>
    </div>

  )
}