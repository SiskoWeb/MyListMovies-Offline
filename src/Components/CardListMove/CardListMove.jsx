import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './CardListMove.css'
export default function CardListMove({item,MoveTo,RemoveFrom,icon}) {
    const dispatchList = useDispatch()
  return (
<>
<div className='card-List'>
<img src={item.Poster} alt={item.Title}></img>
<div className='cover-blur'></div>
<div className='info-movie'>
<p>{item.Title}</p>
<div className='control-list-card'>
<i  onClick={()=>dispatchList({type:MoveTo ,payload:item})} 
className={`fa-solid ${icon} icons`  }></i>
<i onClick={()=>dispatchList({type:RemoveFrom ,payload:item.imdbID})} 
class="fa-solid fa-xmark icons"></i>
</div>
</div>
</div>


</>
  )
}
