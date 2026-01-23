// // Reusing logic via custom hooks

 import { useEffect, useState } from "react";
import { useCounts } from "./useCounts";
// import { useOnlineStatus } from "./useOnlineStatus";
// import { useFormInput } from "./useFormInput";


// function StatusBar() {

//     const [isOnline, setIsOnline] = useState(
// navigator.onLine
// );
    
//     useEffect(() => {
//         function handleOnline() {
//             setIsOnline(true);
//         }

//         function handleOffline() {
//             setIsOnline(false);
//         }

//         window.addEventListener('online', handleOnline);
//         window.addEventListener('offline', handleOffline);

//         return () => {
//             window.removeEventListener('online', handleOnline);
//             window.removeEventListener('offline', handleOffline);
//         }
//     }, [])

//     return <h1>{isOnline ? 'Online' : 'disconnected!'}</h1>

// }

//  function SaveButton() {
//      const [isOnline, setIsOnline] = useState(
// navigator.onLine
// );
    
//     useEffect(() => {
//         function handleOnline() {
//             setIsOnline(true);
//         }

//         function handleOffline() {
//             setIsOnline(false);
//         }

//         window.addEventListener('online', handleOnline);
//         window.addEventListener('offline', handleOffline);

//         return () => {
//             window.removeEventListener('online', handleOnline);
//             window.removeEventListener('offline', handleOffline);
//         }
//     }, [])

//     function handleSaveClick() {
//         console.log("Progress save!");
//     }

//     return (
//         <button disabled={!isOnline} onClick={handleSaveClick}>
//             {isOnline ? 'Online' : 'disconnected!'}
//         </button>

//     )
// }





// function StatusBar2(){
//     const isOnline=useOnlineStatus();
//     return <h1>{isOnline ? 'Online' : 'disconnected!'}</h1>
// }

// function SaveButton2(){
//     const isOnline=useOnlineStatus();
//     function handleSaveClick() {
//         console.log("Progress save!");
//     }
//     return (
//         <button disabled={!isOnline} onClick={handleSaveClick}>
//             {isOnline ? 'Online' : 'disconnected!'}
//         </button>

//     )
// }

//  function App(){
//     return(
//         <>
//             <SaveButton2/>
//             <StatusBar2/>
//         </>
//     )
// }




// // custom hooks permit shared logic, not state itself

// export default function Form(){
// const firstNameProps=useFormInput('fulvios')
// const lastNameProps=useFormInput('fulvios')
//     return(
//         <>
//             fn:<input {...firstNameProps} />
//             ln:<input {...lastNameProps} />
//             {firstNameProps.value} {lastNameProps.value}
//         </>
//     )
// }




export default function Counter() {
 let count= useCounts()
  return <h1>Seconds passed: {count}</h1>;
}
