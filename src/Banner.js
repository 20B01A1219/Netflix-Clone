import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import './banner.css';
function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        return request;
    }
    fetchData();
  }, []);
  function truncate(string, n){
    return string?.length > n ? string.substring(0, n-1)+'...' : string;
  }
  return(
    <header className="banner"
    style = {{
      backgroundSize : "cover",
      backgroundImage : `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
      backgroundPosition : "center center",
    }}>
      <div className="banner_contents">
        <h2 className="banner-title">
          {movies.title || movies.name || movies.original_name}
        </h2>
        <div className="banner-buttons">
          <button className = "banner-button">PLAY</button>
          <button className = "banner-button">MY LIST</button>
        </div>
          <h4 className="banner-desc">{truncate(movies?.overview, 150)}</h4>
          </div>
          <div className="Banner-bottom"/>
    </header>
    
  ) ;
}

export default Banner;
