import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {AddToWatched}  from '../../Redux/Actions/addWatchedAction'
import { useEffect ,useState} from 'react'

import './AddNewMovie.css'
import axios from 'axios'
import CardSearch from '../../Components/CardSearch/CardSearch'

function  AddNewMovie() { 


  const [searchValue,setSearchValue] = useState('')
  const [items, setItems] = useState([]);

  
  const watchList = useSelector(state =>state.watchList)


  useEffect(()=>{


    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=2ad7014a`).then(resp=>setItems(resp.data.Search)).catch((error)=>console.log(error.message))
console.log(watchList)
  },[searchValue])




  return (
    <div className='addnewMovieContainer'>

<input className="enjoy-css" onChange={(e)=>setSearchValue(e.target.value)}  value={searchValue} type='text'></input>

<div className='ListMoviesSearch'>
{items?.length>0?items?.map((item)=>{
  return(
<li key={item.imdbID}>
<CardSearch  item={item}/>
</li>
)
}):<h5>no Movies, search for it</h5>}


</div>
    </div>
    )
}

export default AddNewMovie;
