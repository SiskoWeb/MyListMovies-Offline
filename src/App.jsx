

import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AddNewMovie from './Pages/AddNewMovie/AddNewMovie'
import WatchLisl from './Pages/WatchList/WatchList'
import Watched from './Pages/Watched/Watched'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'


function App() {


  const watchList = useSelector(state =>state.watchList)
  const watchedList = useSelector(state =>state.watched)
  const stateUpdate = useSelector(state =>state)
  useEffect(()=>{

localStorage.setItem('watchList',JSON.stringify(watchList))
localStorage.setItem('watched',JSON.stringify(watchedList))

  },[stateUpdate])



  return (
    <div className="App">


<BrowserRouter>
<NavBar/>
<Routes>
<Route path='/addmovie'  element={<AddNewMovie/>}/>
<Route path='/watchlist'  element={<WatchLisl/>}/>
<Route path='/'  element={<WatchLisl/>}/>
<Route path='/watched'  element={<Watched/>}/>


</Routes>
</BrowserRouter>

    </div>
  )
}

export default App
