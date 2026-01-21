import { useState } from "react";
import { useImmer } from "use-immer";

function MovingDot(){
    const[position,setPosition]=useState({
        x:20,
        y:20
    })

    return(
        <div onPointerMove={e=>{
            setPosition({
                x:e.clientX,
                y:e.clientY
            })
            // position.x=e.clientX;
            // position.y=e.clientY;
        }}
        style={{
            position:"relative",
            width:'100vw',
            height:'100vh'
        }}>
            <div style={{
                position:'absolute',
                borderRadius:'50%',
                backgroundColor:"black",
                width:20,
                height:20,
                transform:`translate(${position.x}px,${position.y}px)`
            }}>

            </div>
        </div>
    )
}


 function Form(){
    const [person,setPerson]=useState({
        firstName:'Fulvios',
        lastName:'lasasf',
        email:'fuasfwe@sfa'
    });

    function HandleFirstName(e){
        setPerson({
            ...person,
            firstName:e.target.value
        })
    }
    function HandleLastName(e){
        setPerson({
            ...person,
            lastName:e.target.value
        })
    }
    function HandleEmail(e){
        setPerson({
            ...person,
            email:e.target.value
        })
    }

    function handlePerson(e){
        setPerson({
            ...person,
            [e.target.name]:e.target.value
        })
    }

    return(
        <>
            fn:<input name='firstName' value={person.firstName} onChange={handlePerson}/>
            ln:<input name='lastName' value={person.lastName} onChange={handlePerson}/>
            email:<input name='email' value={person.email} onChange={handlePerson}/>

            <p>{person.firstName}, {person.lastName},{person.email}</p>
        </>
    )
}



function Form1(){
    const [person,setPerson]=useState({
        name:'fulvios',
        artwork:{
            title:'title',
            city:'brescia'
        }
    })

    function handleNameChange(e){
        setPerson({
            ...person,
            name:e.target.value
        })
    }

    function title(e){
        let o= person.artwork.title
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                title:e.target.value
            },
        })
    }
    function city(e){
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                city:e.target.value
            },
        })
    }

    return(
        <>
            name:<input value={person.name} onChange={handleNameChange}/>
            city:<input value={person.artwork.city} onChange={city}/>
            title:<input value={person.artwork.title} onChange={title}/>
            <p>{person.name} {person.artwork.title} {person.artwork.city}</p>
        </>
    )
}












export default function FormImmer(){
    const [person,updatePerson]=useImmer({
        name:'fulvios',
        artwork:{
            title:'title',
            city:'brescia'
        }
    })

    function handleNameChange(e){
        updatePerson(draft=>{
            draft.name=e.target.value
        })
    }

    function title(e){
        updatePerson(draft=>{
            draft.artwork.title=e.target.value
        })
    }
    function city(e){
        updatePerson(draft=>{
            draft.artwork.city=e.target.value
        })
    }

    return(
        <>
            name:<input value={person.name} onChange={handleNameChange}/>
            city:<input value={person.artwork.city} onChange={city}/>
            title:<input value={person.artwork.title} onChange={title}/>
            <p>{person.name} {person.artwork.title} {person.artwork.city}</p>
        </>
    )
}