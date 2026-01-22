//after render of a component, u can inject code

import { useEffect, useRef, useState } from "react";


function VideoPlayer({src,isPlaying}){
    const ref=useRef(null);

//execute the code after every render
    useEffect(()=>{
        if(isPlaying)
            ref.current.play()
        else
            ref.current.pause()
    })
    return<video ref={ref} src={src} loop/>

}


 function App(){
    const[isPlaying,setIsPlaying]=useState(false)

    return (
    <>
      <button onClick={()=>setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"/>
    </>
  )

}




//useEffect in useState to avoid loop

 function App10(){

    const [count,setCount]=useState(0);
    useEffect(()=>{
        setCount(count+1)
    },[])//execute once after first render

    return(
        <>
            <button>
                done
            </button>
        </>
    )

}






function VideoPlayer2({src,isPlaying}){
    const ref=useRef(null);

//execute the code only if isPlaying change every render
    useEffect(()=>{
        if(isPlaying)
            ref.current.play()
        else
            ref.current.pause()
    },[isPlaying])
    return<video ref={ref} src={src} loop/>

}


 function App100(){

    const[isPlaying,setIsPlaying]=useState(false)
    const [text,setText]=useState('');

    return (
    <>
        <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
      <button onClick={()=>setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"/>
    </>
  )

}










function CreateConnection(){
    return{
        connect(){
            console.log("connecting..")
        },
        disconnect(){
            console.log("disconnected.")
        }
    }
}

 function ChatRoom(){
    useEffect(()=>{
        const connection=CreateConnection();
        connection.connect();
        return ()=>connection.disconnect();
    },[])

    return <h1>Welcome</h1>
}


export default function GoChat(){
    const [show,setShow]=useState(true);

    if(show){
        return(
            <>
                <ChatRoom/>
                <button onClick={()=> setShow(false)}>Hide</button>
            </>
        )
    }else{
        return(
            <>
                <button onClick={()=> setShow(true)}>show</button>
            </>
        )
    }
}














