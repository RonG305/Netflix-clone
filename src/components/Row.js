import React, { useEffect, useState } from 'react'
import './row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const Row = ({title, url}) => {

  const [moviesOrSeies, setMoviesOrSeries] = useState([])
  const imageBaseUrl = "https://image.tmdb.org/t/p/original"
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    const getTVShows = async() => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setMoviesOrSeries(data.results)
        // console.log(data.results)
  
      } catch(error) {
        console.log('An error occured while fetching movies or series')
      }
    }
    getTVShows()
  }, [url])


  const opts = {
    height: '400',
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }


  const handleClick = (movie_series) => {
    if(trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie_series?.name || "")
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'))
      }).catch((error) => console.log(error))
    }
  } 


  return (
    <div className='row__container'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {moviesOrSeies.map((movie_series) => (
          <img key={movie_series.id}
           onClick={() => handleClick(movie_series)}
           className={`${title !== 'TRENDING TV SHOWS' ? 'poster' : 'trending__poster'}`} src={`${imageBaseUrl}/${movie_series.poster_path}`} alt={movie_series.name} />
        ))}
       </div>

       {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} />}
      
      
    </div>
  )
}

export default Row