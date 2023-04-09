import { useState, useEffect} from 'react'
import './App.css'
import './globals.css'
import MovieCard from './MovieCard'
import { handler } from 'daisyui'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=486b34e6';

const App = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter"){
      searchMovies(searchTerm);
    }
  }

  
  return (
    <div className="p-8 space-y-8">
 

       <h1 className='text-xl'>Find your favorite movie!</h1> 
       <input 
       type="text" 
       placeholder="Type here" 
       className="input input-bordered input-md w-full max-w-xs"  
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
       onKeyDown={(e) => handleKeyPress(e)} 
      />
      
    
    {movies?.length > 0 ? (
        <div className="flex flex-wrap gap-4 flex-auto justify-center items-center">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Title not found or try again!</h2>
        </div>
      )}
     
    </div>
  )
}

export default App
