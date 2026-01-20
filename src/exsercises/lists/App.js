// export function getImageUrl(person) {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     's.jpg'
//   );
// }

// export const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
//   accomplishment: 'spaceflight calculations',
//   imageId: 'MK3eW3A'
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
//   accomplishment: 'discovery of Arctic ozone hole',
//   imageId: 'mynHUSa'
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
//   accomplishment: 'electromagnetism theory',
//   imageId: 'bE7W1ji'
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
//   accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//   imageId: 'IOjWm71'
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
//   accomplishment: 'white dwarf star mass calculations',
//   imageId: 'lrWQx8l'
// }];

// export default function List() {
//   const chemists=people.filter(person=> person.profession==='chemist');

//   const listchemists=chemists.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>)
//     const nonchemists=people.filter(person=> person.profession!='chemist')
//   const listItems = nonchemists.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ul>{listItems}</ul>
//       <h1>Chimiests</h1>
//       <ul>{listchemists}</ul>
//     </article>
//   );
// }





// export const recipes = [{
//   id: 'greek-salad',
//   name: 'Greek Salad',
//   ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
// }, {
//   id: 'hawaiian-pizza',
//   name: 'Hawaiian Pizza',
//   ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
// }, {
//   id: 'hummus',
//   name: 'Hummus',
//   ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
// }];


// export default function RecipeList() {
  
//   return (
//     <div>
//       <h1>Recipes:</h1>
//       {recipes.map(recipe=> 
//       <div key={recipe.id}>
//         <h2>{recipe.name}</h2>
//         <ul>
//             {recipe.ingredients.map((ingredient,index)=>
//               <li key={index}>{ingredient}</li>)}
//         </ul> 
//       </div> 
    
//       )}
//     </div>
//   );
// }








// export const recipes = [{
//   id: 'greek-salad',
//   name: 'Greek Salad',
//   ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
// }, {
//   id: 'hawaiian-pizza',
//   name: 'Hawaiian Pizza',
//   ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
// }, {
//   id: 'hummus',
//   name: 'Hummus',
//   ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
// }];

// function Recipe({name,ingredients}){
//   return(
//     <>
//       <div>
//         <h2>{name}</h2>
//         <ul>
//           {ingredients.map((ingredient,index) =>
//             <li key={index}>
//               {ingredient}
//             </li>
//           )}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe => 
//         <Recipe 
//           key={recipe.id}
//           name={recipe.name}
//           ingredients={recipe.ingredients}
//         />)}
//     </div>
//   );
// }


const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
const lenght= poem.lines.length-1;
  return (
    <article>
      {poem.lines.map((line, index) =>
      <div key={index}>
        <p>
          {line}
        </p>
        { index!=lenght && <hr></hr>}
      </div>
      )}
    </article>
  );
}
