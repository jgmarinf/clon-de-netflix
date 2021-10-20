import React, { useEffect, useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';




const Row = ({title, fetchUrl, isLargeRow}) => {
    const classes = useStyle ();
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original";
    const API_KEY = "c9c62ab0a81a130b26e8b1611dfdc727"

    useEffect(()=> {
        const fetchData = async () =>{
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        };
        fetchData();
     }, [fetchUrl])

    
   
    

    return (
        <div className={classes.root}>
            <Typography variant="h4"> {title} </Typography>
            <div className={classes.posters}>
                {movies.map(
                    (movie)=> 
                        ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`${classes.poster} ${ 
                                    isLargeRow && classes.posterLarge
                                }`}
                                key={movie.id}
                                src= {`https://image.tmdb.org/t/p/original${
                                    isLargeRow ? movie.poster_path : movie?.backdrop_path}
                                `}
                                alt={movie?.name}
                            />
                    )
                    )
                }
            </div>
        </div>
    );
};
const useStyle = makeStyles((theme) => ({
    root : {
      color: "#fff",
      marginLeft: theme.spacing(4),
    },
    posters: {
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },       
    },
    poster: {
        maxHeight: "12rem",
        objectFit: "contain",
        marginRight: theme.spacing(1),
        transition: "transform 450ms",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
    posterLarge: {
        maxHeight: "15rem",
        "&:hover": {
            transform: "scale(1.15)",
        },
    },
  }));

export default Row
