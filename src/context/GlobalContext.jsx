import { useReducer } from 'react'
import { createContext, Prov } from 'react'

const initsState = {
    watchList: [],
    watched: []

}

export const GlobalContext = createContext(initsState)

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initsState)
    return (
        <GlobalContext.Provider value={{ watchList: state.watchList, watched: state.watched, MovieDispatch: dispatch }} >
            {children}
        </GlobalContext.Provider>
    )
}
export default ContextProvider