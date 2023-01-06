const initalValue = { watchList: localStorage.getItem("watchList")?JSON.parse(localStorage.getItem("watchList")):[] , 

watched: localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[] }




export const ListMovieReducer = (state = initalValue, action) => {

    switch (action.type) {


        case 'ADD_TO_WATCHLIST':
            return {
                ...state,
                watchList:[action.payload, ...state.watchList] ,
                 
               
            }


        case 'REMOVE_FROM_WATCHLIST':
            return {
                ...state,
                watchList: state.watchList.filter((i) => i.imdbID !== action.payload)
            }

        case 'MOVE_TO_WATCHLIST':
            return {
                ...state,
                watched: state.watched.filter((i) => i.imdbID !== action.payload.imdbID),
                watchList: [action.payload, ...state.watchList]
            }


        case 'ADD_TO_WATCHED':
            return {
                ...state,
                watchList: state.watchList.filter((i) => i.imdbID !== action.payload.imdbID),
          
                watched: [action.payload, ...state.watched]
            }

        case 'REMOVE_FROM__WATCHED':
            return {
                ...state,
                watched: state.watched.filter((i) => i.imdbID !== action.payload)
            }
        default:
            return state;
    }
}


