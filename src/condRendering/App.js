// function Item({name, isPacked}){
//   if(isPacked)
//     return <li className="item">{name} v</li>

//   return <li className="item">{name}</li>
// }

// function Item({name, isPacked}){
//   if(isPacked)
//     return null;

//   return <li className="item">{name}</li>
// }


// function Item({name, isPacked}){
//   return (
//     <li className="item">
//       {isPacked ?(
//         <del>
//           {name + 'v'}
//         </del>
//       ):(
//         name
//       )}
//     </li>
//   )
// }


function Item({name, isPacked}){
  let s=<h1>startup</h1>
  return (
    <li className="item">
      {name} {isPacked && 'v'}
      {s}
    </li>
  )
}

export default function PackingList(){
  return(
    <section>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit"/>
          <Item 
          isPacked={true} 
          name="Space suit"/>
          <Item 
          isPacked={false} 
          name="Space suit"/>
      </ul>
    </section>
  )
}