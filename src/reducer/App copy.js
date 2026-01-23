import { useReducer, useState } from "react";

export const initialActivities={
  user:'',
  activities:[
    {
      id:0,
      name:'anna'
    },{
      id:1,
      name:'jotaro'
    }
  ]
}
export default function App(){
    const [state, dispatch] = useReducer(messengerReducer, initialActivities);

  return(
    <>
      <ListActivities state={state} dispatch={dispatch}/>
      {<Login state={state} dispatch={dispatch} /> }
    </>
  )
}

export function messengerReducer(state, action,) {
  switch (action.type) {
    case 'add-activity': {
      return {user:state.user,
        activities:[...state.activities,{
        id:action.id,
        name:action.name
      }]};
    }
    case 'add-user': {
      return {user:action.user,
        activities:[...state.activities]};
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId=2;

export function ListActivities({state,dispatch}){
  const [name, setName] = useState('');
  function handdleAddActivity(name){
    dispatch({type:'add-activity',id:nextId++ ,name:name})
  }
  return(
    <>
      Activity:<textarea
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <button onClick={()=>handdleAddActivity(name)}>
        Add
      </button>
      <ul>  
          {state.activities.map(a=>(
            <li key={a.id}>{a.id} {a.name}</li>
          ))}
      </ul>
    </>
  )
}

export function Login({state,dispatch}){
  const [userName, setUserName] = useState('');

  function handdleUserName(name){
    dispatch({type:'add-user',user:userName})
  }
  return(
    <>
      {state.user ?(
        <h1>HELLO {state.user}</h1>
      ):(
        <>
          username:<input value={userName} onChange={(e)=>setUserName(e.target.value)} />
          <button onClick={handdleUserName} >
              login
          </button>
        </>
      )}
    </>
  )
}