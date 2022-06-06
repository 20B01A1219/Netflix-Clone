import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const url = "https://image.tmdb.org/t/p/original/";
function Rows({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
      width : "100%",
      height : '450px',
      playerVars : {
        autoplay : 1,
      },
  };
  const handleOnclick = (movie)=>{
    if(trailerUrl){
      setTrailerUrl("");
    }
    else{
        movieTrailer(movie?.name || "")
        .then((url)=>{
          console.log(url);
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
        })
        .catch((error)=>console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="rowPostures">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick = {()=>{
              handleOnclick(movie)
            }}
            className={`Poster ${isLargeRow && "PosterLarge"}`}
            src={
              isLargeRow
                ? `${url}${movie.poster_path}`
                : `${url}${movie.backdrop_path}`
            }
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId =  {trailerUrl} opts ={opts}/>}    </div>
  );
}

export default Rows;
