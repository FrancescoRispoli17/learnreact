import { useState } from "react";
import { sculptureList } from "./data";
// export default function Gallery(){
//   let index=0;
//   function handleClick(){
//     index++;
//   }

//   let sculture = sculptureList[index];

//   return(
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>

//       <h2>
//         {sculture.name} by {sculture.artist}
//       </h2>
//       <h3>{index+1}of{sculptureList.length}</h3>
//       <img src={sculture.url}></img>

//       <p>{sculture.description}</p>
//     </>
//   )
// }

function Gallery(){
  const[index,setIndex]=useState(0);
  const[showMore,SetShowMore]=useState(false);

  function handleClick(){
    setIndex(index+1)
  }

  function handleMoreClick(){
    SetShowMore(!showMore);
  }

  let sculture=sculptureList[index];

   return(
    <>
      <button onClick={handleClick}>
        Next
      </button>

      <h2>
        {sculture.name} by {sculture.artist}
      </h2>
      <h3>{index+1}of{sculptureList.length}</h3>
      <img src={sculture.url}></img>

      <button onClick={handleMoreClick}>
        {showMore ? 'Hide':'Show'} details
      </button>
      {showMore && <p>{sculture.description}</p>}
    </>
  )
}

export default function App(){
  return(
    <div>
      <Gallery></Gallery>
      <Gallery></Gallery>
    </div>
  )
}