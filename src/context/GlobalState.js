import {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

const initialState = {
    watchlist: [],
    watched: [],
};

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    const addMovieToWatchlist = (movie)=> {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }

    return (
    
    //component that has access to the state and actions; 
        <GlobalContext.Provider
            value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchlist
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

