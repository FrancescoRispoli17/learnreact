import { getImage } from "../utils";

// function Avatar({person,size}){
//   const avatar='';
//   const description='new image';
//   return (

//       <img src={getImage(person)} 
//       className="avatar" 
//       alt={person.name}
//       width={size}
//       height={size}/>

//   )
// }
// function Avatar(props){
//   let person=props.person;
//   let size=props.size;
//   return (

//       <img src={getImage(person)} 
//       className="avatar" 
//       alt={person.name}
//       width={size}
//       height={size}/>

//   )
// }

// export default function Profile(){
// return(
//   <Avatar
//   size={100}
//   person={{
//     name:"fulvios",
//     imageId:"yXOvdOSs"
//   }}
//   />
// )
// }


//SPREAD SYNTAX: forwarding properties using jsx


function Avatar({person,size}){
  return (
      <img src={getImage(person)} 
      className="avatar" 
      alt={person.name}
      width={size}
      height={size}/>

  )
}

// function Profile({person,size,isSepia=false,ThickBorder=false}){
//   return(
//     <div className="card">
//         <Avatar
//           person={person}
//           size={size}></Avatar>
//     </div>
//   )
// }
function Profile(props){
  return(
    <div className="card">
      
        <Avatar {...props}></Avatar>
    </div>
  )
}

export default function App(){
  return(
    <Profile
    size={100}
    person={{
      name:"fulvio",
      imageId:"MK3eW3Am"
    }}>

    </Profile>
  )
}

// function Card({children}){
//   return (
//     <div className="card">
//       {children}
//     </div>
//   )
// }

// function Profile(){
//   return(
//     <Card>
//       <Avatar
//             person={{
//               name:"fulvios",
//               imageId:"yXOvdOSs"
//             }}
//             size={100}>
//       </Avatar>
//     </Card>
//   )
// }

// export default function App(){
//   return(
//     <Profile/>
//   )
// }