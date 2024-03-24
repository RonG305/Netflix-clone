import React from 'react'
import { useState, useEffect } from 'react'
import requests from '../requests'
import './banner.css'

const Banner = () => {
  const [series, setSeries] = useState([])
  const imageBaseUrl = "https://image.tmdb.org/t/p/original"
 

  useEffect(() => {
    const getTVShow = async() => {
      try {

        const response = await fetch(requests.trendingTVShowsPopular)
        const data = await response.json()
        const randomIndex = Math.floor(Math.random() * data.results.length)
        setSeries(data.results[randomIndex])
        console.log("Banner data", data.results[randomIndex])

      } catch(error) {
        console.log('An error occured while fetching movies or series')
      }
    }
    getTVShow()
  }, [])
  return (
    <div
     className=' banner__container'
        style={{
            backgroundImage: `url("${imageBaseUrl}/${series?.backdrop_path
            }")`,
            backgroundPosition: 'centre',
        
        
        }}>

        <div className=' banner__content'>
            <div>
                <h1>{series?.name}</h1>
                <div className=' btn__container'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>

                <p>{series?.overview}</p>
            </div>
           
            
        </div>


        <div className='banner__fadein'></div>

       
    </div>
  )
}

export default Banner