import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {ListMovieReducer} from '../Reducer/listmoviesReducer'
export const store = createStore(ListMovieReducer,applyMiddleware(thunk))