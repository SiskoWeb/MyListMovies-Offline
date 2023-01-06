import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {GetMovieBySearch,GetMovieUsingId}  from '../../Redux/Actions/addWatchedAction'
import { useEffect ,useState} from 'react'
import './WatchList.css'
import CardListMove from '../../Components/CardListMove/CardListMove'
export default function WatchList() {
  

    const watchList = useSelector(state =>state.watchList)
    const dispatchList = useDispatch()
    const [items, setItems] = useState();
    const [listM,setListM] = useState([])

  const AddToWatched = 'ADD_TO_WATCHED'
  const RemoveFromWatchList = 'REMOVE_FROM_WATCHLIST'
  const iconWatch = 'fa-eye'

    useEffect(()=>{

      setItems(watchList)
      console.log(watchList)
    },[watchList])
  
  
    
  return (

<>
    <h3 className='title-page'>My WatchList</h3>
    <h3 className='title-page'>{watchList?.length>0?watchList.length:null}</h3>
    <div className='Movies-Added'>

    {watchList?.length>0?watchList?.map((itemtowatch)=>{
     return(

      <CardListMove item={itemtowatch}  MoveTo={AddToWatched} RemoveFrom={RemoveFromWatchList} icon={iconWatch}/>

     
     )
   }):<div > <p className='no-movies' >No movies in your list, add some!</p></div>}

    </div>
    </>
  )
}
