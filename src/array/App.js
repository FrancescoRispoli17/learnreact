import { useState } from "react";
import { useImmer } from "use-immer";

let index=0
 function List(){
    const[name,setName]=useState('')
    const[artists,setArtists]=useState([])

    return(
        <>
        <input  
            value={name}
            onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>{
            // artists.push({
            //     id:index++,
            //     name:name
            // })
            setArtists([
                ...artists,
                {
                    id:index++,
                    name:name
                }

            ])
        }}>add</button>
        <ul>
            {artists.map(a=>(

                <li key={a.id}>{a.name}</li>
            )
            )}
        </ul>
        </>
    )
}


let list=[
    {id:0,name:'fulvio'},
    {id:1,name:'fulvio'},
]
 function List2(){
    const[artists,setArtists]=useState(list);

    return(
        <>
            {artists.map(a=>(
                <li key={a.id}>
                    {a.name}
                    <button 
                        onClick={()=>{
                            setArtists(
                                artists.filter(art=>art.id!=a.id)
                            )
                        }}>elimina</button>
                </li>
            )

            )}
        </>
    )
}







let initialShapes=[
    {id:0,type:'circle',x:50,y:100},
    {id:1,type:'square',x:150,y:100},
    {id:2,type:'circle',x:250,y:100}
]
 function Update(){
    const[shapes,setShapes]=useState(initialShapes)

    function handleClick(){
        const nextShapes=shapes.map(shape=>{
            if(shape.type==='square')
                return shape;
            else{
                return{
                    ...shape,
                    y:shape.y+50
                }
            }
        })
        setShapes(nextShapes)
    }
    return(
        <>
        <button onClick={handleClick}>move circle</button>
        {shapes.map(shape=>(
            <div
                key={shape.id}
                style={{
                    background:'purple',
                    position:'absolute',
                    left:shape.x,
                    top:shape.y,
                    borderRadius:shape.type==='circle'?'50%':'',
                    width:20,
                    height:20
                }}
                ></div>
        ))}
        </>
    )
}

let initialList2=[
    {id:0,title:'abc def'},
    {id:1,title:'2abc def'},
    {id:2,title:'zabc def'}
]

 function List3(){
    const[list,setList]=useState(initialList2);

    function handleClick(){
        const nextList=[...list];
        nextList.reverse();
        setList(nextList);
    }

     return(
        <>
        <button onClick={handleClick}>riordina</button>
        {list.map(l=>(
            <div
                key={l.id}
                >
                {l.title}
            </div>
        ))}
        </>
    )

}



let initList3 = [
    {id:0, title:'abc def', seen:false},
    {id:1, title:'2abc def',  seen:false},
    {id:2, title:'zabc def',  seen:true}
]

let nextId3 = 3;


export default function BucketList() {
    const [myList, updateMyList] = useImmer(initList3);
    const [yourList, updateYourList] = useImmer(initList3);

    function handleToggleMyList(id, nextSeen) {
        updateMyList(draft => {
            const artwork = draft.find(a => 
            a.id === id)
            artwork.seen = nextSeen;
        })
    }

    function handleToggleYourList(id, nextSeen) {
        updateYourList(draft => {
            const artwork = draft.find(a => 
            a.id === id)
            artwork.seen = nextSeen;
        })
    }
    
    return (
        <>
            <h1>My</h1>
           <ItemList
            artworks={myList}
            onToggle={handleToggleMyList}  />

            <ItemList
            artworks={yourList}
            onToggle={handleToggleYourList}  />
        </>

    )
}

function ItemList({artworks, onToggle}) {

    return (
       <ul> 
        { 
artworks.map
(a => (
            <li key={
a.id
}>

                <input type="checkbox"
                    checked={a.seen}
                    onChange={e=> {
                        onToggle(
a.id
, e.target.checked);
                    }} />

            {a.title}

            </li>
        
        ))}
        </ul>

    )

}