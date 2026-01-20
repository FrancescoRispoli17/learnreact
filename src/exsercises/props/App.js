// export function getImageUrl(imageId, size = 's') {
//   return (
//     'https://i.imgur.com/' +
//     imageId +
//     size +
//     '.jpg'
//   );
// }
// export function Profile({person}){
//     return(
//         <section className="profile">
//         <h2>{person.name}</h2>
//         <img
//           className="avatar"
//           src={getImageUrl("szV5sdG")}
//           alt="Maria Skłodowska-Curie"
//           width={100}
//           height={100}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b>
//             {person.profession}
//           </li>
//           <li>
//             <b>Awards: 4 </b>
//             {person.awards}
//           </li>
//           <li>
//             <b>Discovered: </b>
//             {person.discovered}
//           </li>
//         </ul>
//       </section>

//     )
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         person={{
//             name:"Maria Skłodowska-Curie",
//             imageId:"szV5sdG",
//             profession:"physicist and chemist",
//             awards:"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,Matteucci Medal",
//             discovered:"polonium (chemical element)"
//         }}
//       />
//     </div>
//   );
// }











// export function getImageUrl(person, size) {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     size +
//     '.jpg'
//   );
// }


// function Avatar({ person, size }) {
   
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, size<90?'s':'b')}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar
//       size={40}
//       person={{ 
//         name: 'Gregorio Y. Zara', 
//         imageId: '7vQD0fP'
//       }}
//     />
//   );
// }




// function Card({children}){
//   return (
//     <div className="card">
//       {children}
//     </div>
//   )
// }

// function Avatar({name}){
//   return (
//       <>
//         <h1>{name}</h1>
//         <img
//             className="avatar"
//             src="https://i.imgur.com/OKS67lhm.jpg"
//             alt="Aklilu Lemma"
//             width={70}
//             height={70}
//         />
//       </>
//   )
// }
// function About({name}){
//   return (
//       <>
//         <h1>{name}</h1>
//         <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//       </>
//   )
// }

// export default function Profile() {
//   return (
//     <div>
//         <Card>
//                 <Avatar name={"photo"}/>
//         </Card>

//         <Card>
//                 <About name={"About"}></About>
//         </Card>
//     </div>
//   );
// }
