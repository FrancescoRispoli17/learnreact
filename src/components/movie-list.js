import { useEffect, useState } from "react"
import MovieDataService from '../Services/movies'

export default function MovieList(props){
    const [movies,setMovies]=useState([])
    function retrieveMovies(){
        MovieDataService.getAll().then(response=>{
            console.log(response.data)
            setMovies(response.data)
        })
    }
    useEffect(()=>{
        retrieveMovies();
    },[])
  return(
    <div className="App">
        <p>{movies.length}</p>
      {movies.map(m=>(
        <p>{m.title}</p>)
      )}
      
    </div>
  )
}


