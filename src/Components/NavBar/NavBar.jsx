import React from 'react'
import './NavBar.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'

function NavBar(){

    return(
        <div className='NavBar'>
       <Link to='/addmovie'> <h2>LOGO</h2></Link>
        <div className='Links'>
        <Link className='addbtn' to='/addmovie'>Add Movie</Link>
        <Link to='/watchlist'>WatchList</Link>
        <Link  to='/watched'>Watched</Link>

        </div>
        </div>
    )
}
export default NavBar