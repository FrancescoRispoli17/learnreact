import { useRef, useState } from "react";
import { flushSync } from "react-dom";

// export default function(){
//     const inputRef=useRef(null);

//     function handleClick(){
//         //inputRef.current.focus();
//         inputRef.current.select();

//     }
//     return(
//         <>
//             <input ref={inputRef}/>
//             <button onClick={handleClick}>focus input</button>
//         </>
//     )
// }

 function ChceckScrolling(){
    const firstRef=useRef(null)
    const secondRef=useRef(null)
    const thirdRef=useRef(null)

    function handleScrollToFirst(){
        firstRef.current.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        });
    }

    function handleScrollToSecond(){
        secondRef.current.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        });
    }

    function handleScrollToThird(){
        thirdRef.current.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        });
    }
    return(
        <>
            <nav>
                <button onClick={handleScrollToFirst}>first</button>
                <button onClick={handleScrollToSecond}>second</button>
                <button onClick={handleScrollToThird}>third</button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img src="https://i.imgur.com/MK3eW3Am.jpg" ref={firstRef}/>
                    </li>
                    <li>
                        <img src="https://i.imgur.com/MK3eW3Am.jpg" ref={secondRef}/>
                    </li>
                    <li>
                        <img src="https://i.imgur.com/MK3eW3Am.jpg" ref={thirdRef}/>
                    </li>
                </ul>
            </div>
        </>
    )
}

let nextId= 0;
let initialTodos=[{id:0,text:'123'}];

export default function TodoList(){
    const listRef=useRef(null);
    const [text,setText]=useState('')
    const [todos,setTodos]=useState(initialTodos)

    function handleAdd(){
        const newTodo={id:nextId++,text:text}

        flushSync(()=>{
            setText('');
            setTodos([...todos,newTodo])
        })
        listRef.current.lastChild.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        });
    }

    return(
        <>
            <button onClick={handleAdd}>
                add
            </button>
            <input 
                value={text}
                onChange={e=>setText(e.target.value)}/>
            
            <ul ref={listRef}>
                 {todos.map(t=>(
                    <li key={t.id}>{t.text}</li>
                 ))}
            </ul>
        </>
    )
}