// shared state between components(idiom:lifting the state up!)

import { useState } from "react";

// function Panel({title,children}){
//     const [isActive,setActive]=useState(false)
    
//     return(
//         <section>
//             <h3>{title}</h3>
//             {
//                 isActive ? 
//                     <p>{children}</p> : 
//                 <button onClick={()=> setActive(true)}>show</button>
//             }
//         </section>
//     )
// }




function Panel({title,isActive,onShow,children}){
    
    return(
        <section>
            <h3>{title}</h3>
            {
                isActive ? 
                    <p>{children}</p> : 
                <button onClick={onShow}>show</button>
            }
        </section>
    )
}

export default function Accordion(){
    const [activeIndex,setActive]=useState(0)
    return(
        <>
            <Panel
                title="about"
                isActive={activeIndex==0}
                onShow={()=>setActive(0)}>hello everybody
            </Panel>

            <Panel
                title="info"
                isActive={activeIndex==1}
                onShow={()=>setActive(1)}>info now is available
            </Panel>
        </>
    )
}
