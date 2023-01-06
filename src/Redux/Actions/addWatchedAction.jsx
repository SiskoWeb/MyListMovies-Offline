import axios from 'axios'

  // export const GetMovieBySearch  =  (word) =>{
  //   return async(dispatch)=>{
      
  //   await axios.get(`http://www.omdbapi.com/?s=${word}&apikey=2ad7014a`).then(resp=>dispatch({type:'ALL' ,all:resp.data.Search})).catch((error)=>dispatch({type:'ERROR' ,error:error}))
      
 
  //   }
   
  // }

  
  export const AddToWatched  =  (id) =>{
    return async(dispatch)=>{

        dispatch({type:'WATCHED' ,watched:id})
      
 
    }
   
  }

  export const RemoveFromWatched  =  (id) =>{
    return async(dispatch)=>{

        dispatch({type:'WATCHED' ,watched:id})
      
 
    }
   
  }

  export const GetMovieUsingId  =  () =>{
    return async(dispatch)=>{
        
  dispatch({type:'ADD_TO_WATCHLIST' ,watchList:localStorage.getItem("watchList")})
       
  
     }
   
  }



