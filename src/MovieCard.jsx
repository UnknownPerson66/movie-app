import React from 'react';
import './globals.css'

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  
  const FirstLetterUpperCase = str => {
    return (
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
  };
  
  return (
    <div className="movie flex flex-col items-center my-10 text-center" key={imdbID}>
      <div className="card max-w-xs max-h-[445px] bg-base-100 shadow-xl image-full">
        <figure><img className='w-full' src={Poster !== "N/A" ? Poster: "https://via.placeholder.com/400"} alt={Title}/></figure>
        <div className="card-body">
          <h2 className=" text-xl font-semibold md:break-all">{Title}</h2>
          <span>Type: {FirstLetterUpperCase(Type)}</span>
          <span>Year: {Year}</span>  
        </div>
      </div>
    </div>
  );
}

export default MovieCard;