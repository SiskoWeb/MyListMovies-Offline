import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect ,useState} from 'react'
import './CardSearch.css'
import noImg from '../../images/Poster.png'
export default function CardSearch({item}) {
const MovieDispatch = useDispatch()

    const watchedMove = useSelector(state => state.watched)
    const watchMove = useSelector(state => state.watchList)

    const storedMovie = watchMove.find((o)=> o.imdbID === item.imdbID) // movie.id === movie.id in watchlist return this object
    const storedMovieWatched = watchedMove.find((o)=> o.imdbID === item.imdbID)

    const watchlistDisabled = storedMovie ? true : 
          storedMovieWatched ? true : false

    const watchedDisabled = storedMovieWatched ? true : false    
  return (
    <div className='search-card'>
        <div className='poster-wrapper'>
            {
               
                    <img src={item.Poster } alt={item.Title}></img>
              
            }
        </div>
        <div className="info">
            <div className="header">
                <h3 className='title'>{item.Title}</h3>
                {item.Year ? <h4 className='release-date'>{item.Year}</h4> : '-'}
            </div>
        
        <div className="controls">
            <button
             className='btn'
             disabled={watchlistDisabled}
             onClick={()=>MovieDispatch({type : 'ADD_TO_WATCHLIST' , payload : item })}
             >Add to Watchlist
            </button>
            <button
             className='btn'
             disabled={watchedDisabled}
             onClick={()=>MovieDispatch({type : 'ADD_TO_WATCHED' , payload : item })}
             >Add to Watched
            </button>
        </div>
        </div>
    </div>
  )
}
