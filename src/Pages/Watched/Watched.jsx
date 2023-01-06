import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {GetMovieBySearch,GetMovieUsingId}  from '../../Redux/Actions/addWatchedAction'
import { useEffect ,useState} from 'react'
import '../AddNewMovie/AddNewMovie.css'
import '../WatchList/WatchList.css'
import CardListMove from '../../Components/CardListMove/CardListMove'
export default function Watched() {
  

    const watchedList = useSelector(state =>state.watched)
    const dispatchList = useDispatch()
    const [items, setItems] = useState();



  
    const MoveToWatchList = 'MOVE_TO_WATCHLIST'
    const RemoveFromWatched = 'REMOVE_FROM__WATCHED'
const iconWatched = 'fa-eye-slash'
    useEffect(()=>{
       
      setItems(watchedList)
      console.log(watchedList)
    },[watchedList])
  
  
    
  return (



    <div>
    <h3 className='title-page'>Wtached List</h3>
    <h3 className='title-page'>{watchedList?.length>0?watchedList.length:null}</h3>
    <div className='Movies-Added'>

    {watchedList?.length>0?watchedList?.map((itemWatched)=>{
     return(

      <CardListMove item={itemWatched}  MoveTo={MoveToWatchList} RemoveFrom={RemoveFromWatched} icon={iconWatched}/>

     
     )
   }):<div > <p className='no-movies' >No movies in your list, add some!</p></div>}

    </div>
    </div>
  )
}
