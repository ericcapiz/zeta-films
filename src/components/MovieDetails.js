import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


const MovieDetails = () => {
    const {watchlist} = useContext(GlobalContext);
    console.log("movie", watchlist[0].title)
    return (
        <div>
            <h1>{watchlist[0].title}</h1>
        </div>
    )
}

export default MovieDetails
