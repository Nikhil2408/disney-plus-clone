import { useState, useEffect } from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import styles from "../styles/FetchMovies.module.css";
import * as Constants from "../Constants/Constants";
import {Link} from "react-router-dom";

function FetchMoviesOrShows(props){

    const [fetchedMoviesOrShows, setFetchedMoviesOrShows] = useState([]);

    useEffect(() => {
        getMoviesOrShows();
    }, []);

    async function getMoviesOrShows(){
        const responseObj = await fetch(`${props.API_URL}`)
        const response = await responseObj.json();
        setFetchedMoviesOrShows(response.results);
    }

    return (
        fetchedMoviesOrShows.length === 0
        ?
        <div className={styles.loader}>
            <h2>Loading {props.heading}.....</h2>
        </div>
        :
        <div>
            <h2 className={styles.heading}>{props.heading}</h2>
            <ReactElasticCarousel breakPoints={Constants.breakpoints}>
                {
                    fetchedMoviesOrShows.map(movieOrShow => {
                        return <Link to={`/${props.tag}/${movieOrShow.id}`} key={movieOrShow.id} className={styles.moviesContainer}>
                            <img src={`https://image.tmdb.org/t/p/original${movieOrShow.poster_path}`} />
                        </Link>
                    })
                }
            </ReactElasticCarousel>
        </div>
    )
}


export default FetchMoviesOrShows;