import React, { useEffect, useState } from 'react'
import './row.css'

const Row = ({title, url}) => {

  const [moviesOrSeies, setMoviesOrSeries] = useState([])
  const imageBaseUrl = "https://image.tmdb.org/t/p/original"

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


  return (
    <div className='row__container'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {moviesOrSeies.map((movie_series) => (
          <img key={movie_series.id} className={`${title !== 'TRENDING TV SHOWS' ? 'poster' : 'trending__poster'}`} src={`${imageBaseUrl}/${movie_series.poster_path}`} alt={movie_series.name} />
        ))}
       </div>
      
      
    </div>
  )
}

export default Row