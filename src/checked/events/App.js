// export  function Button(){

//   function handleClick(){
//     alert("error click");
//   }
//   return (
//     <button onClick={handleClick}>
//       no interaction
//     </button>
//   )
// }





// function AlertButton({message,children}){
//   return(
//     <button onClick={()=>alert(message)}>
//       {children}
//     </button>
//   )
// }

// export default function ToolBar(){
//   return(
//     <div>
//       <AlertButton message="Playing">
//         Play movie
//       </AlertButton>
//       <AlertButton message="Uploading">
//         Upload Images
//       </AlertButton>
//     </div>
//   )
// }




// function Button({onSmash,children}){
//   return(
//     <button 
//       onClick={onSmash}>
//         {children}
//       </button>
//   )
// }

// function PlayButton({movieName}){
//   function handlePlayClick(){
//     alert("playing");
//   }
//   return(
//     <Button
//       onSmash={handlePlayClick}>
//         Play {movieName}
//       </Button>
//   )
// }

// export default function ToolBar(){
//   return(
//     <PlayButton movieName="28 anni dopo"></PlayButton>
//   )
// }








// export default function Toolbar(){
//   return(
//     <div onClick={()=> alert("clicked on toolbar")}>
//       <button onClick={(e)=>{
//           e.stopPropagation();
//           alert("playing");
//         }}>
//         play movie
//       </button>
//        <button onClick={(e)=>{
//           e.stopPropagation(); 
//           alert("uploading")
//         }}>
//         upload image
//       </button>
//     </div>
//   )
// }







export default function Toolbar(){
  return(
    <div onClick={()=> alert("clicked on toolbar 1")}>

      <div onClickCapture={()=> alert("clicked on toolbar")}>
        
        <button onClick={(e)=>{
            e.stopPropagation();
            alert("playing");
          }}>
          play movie
        </button>
        <button onClick={(e)=>{ 
            alert("uploading")
          }}>
          upload image
        </button>

      </div>

    </div>
  )
}





// export default function Signup(){
//   return(
//     <form 
//       onSubmit={(e)=>{
//           e.preventDefault();
//           alert("submitting")
//         }}>
//         <input/>
//         <button>send</button>
//     </form>
//   )
// }