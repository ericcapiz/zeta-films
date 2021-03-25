import {createContext, useReducer, useEffect} from "react";
import AppReducer from './AppReducer';

const initialState = {

    //checks for data in localstorage and will use that data/if nothing in local storge than the state is an empty array
    //data persistant- app can refresh, close/stop, open/start and the data will still be within local storage
    
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //stores in local storage
    useEffect (() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    },[state]);

    //Actions

    const addMovieToWatchlist = (movie)=> {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }

    const addMovieToWatched = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie})
    }

    const moveToWatchlist = (movie) => {
        dispatch({type: "MOVE_TO_WATCHLIST", payload: movie})
    }

    const removeFromWatched = (id) => {
        dispatch({type: "REMOVE_FROM_WATCHED", payload: id})
    }

    return (
    
    //component that has access to the state and actions; 
        <GlobalContext.Provider
            value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveToWatchlist,
            removeFromWatched,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

