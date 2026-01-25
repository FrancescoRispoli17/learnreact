// let guest =0

// function Cup(){
//   guest = guest+1;
//   return<h2>Tea cup for {guest} is available</h2>
// }


// export default function TeaSet(){
  //   return(
    //     <>
    //       <Cup/>
    //       <Cup/>
    //       <Cup/>
    //     </>
    //   )
    // }
    function Cup({guest}){
      return<h2>Tea cup for {guest} is available</h2>
    }

//     export default function TeaSet(){
//   return(
//     <>
//       <Cup guest={1}/>
//       <Cup guest={2}/>
//       <Cup guest={3}/>
//     </>
//   )
// }

export default function TeaSet(){
  const cups=[];
  for(let i=1;i<10; i++){
    cups.push(<Cup key={i} guest={i}></Cup>)}

  return cups;
}