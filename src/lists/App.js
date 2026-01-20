// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

import { people } from "./data";
import { getImage } from "./utils";

// export default function List(){
//  const listItems= people.map(person => <li key={person.id}>{person}</li>)
//  return <ul>{listItems}</ul>
// }


export default function List(){
const chemists=people.filter(person=> person.profession==='chemist')

const listItems=chemists.map(person=> 
<li>
  <img 
    src={getImage(person.imageId)}
    alt={person.name} />
    <p>
      <b>{person.name}</b>
      {person.profession}
      {person.accomplishment}
    </p>
</li>)
return <ul>{listItems}</ul>
}