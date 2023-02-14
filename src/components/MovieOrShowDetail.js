import {useEffect, useState} from "react";
import {useOutletContext, useParams} from "react-router-dom";
import * as Constants from "../Constants/Constants";
import styles from "../styles/Caraousal.module.css";
import styles1 from "../styles/MovieDetail.module.css";

function MovieOrShowDetail(props){

    const [details, setDetails] = useState({});
    const [videos, setVideos] = useState([]);

    const params = useParams();
    const {addToWatchList} = useOutletContext();
    

    useEffect(() => {
        getDetailsById();
    }, []);

    async function getDetailsById(){
        const responseObj = await fetch(`https://api.themoviedb.org/3/${props.name}/${params.id}?api_key=${Constants.API_KEY}`)
        const response = await responseObj.json();
        setDetails(response);
        const videosResObj = await fetch(`https://api.themoviedb.org/3/${props.name}/${params.id}/videos?api_key=${Constants.API_KEY}&language=en-US`)
        const videosRes = await videosResObj.json();
        setVideos(videosRes.results);
    }

    function addMovieOrShowToWatchList(){
        addToWatchList(details);
    }

    return (
        Object.keys(details).length === 0
        ?
        <h1 className={styles.loader}>Loading Details...</h1>
        :
        <div>
            <div className={styles.Caraousal_Container}>
                <div className={styles.Caraousal_content}>
                    <h1>{details.original_title}</h1>
                    {
                        details.genres.map((genre, index) => {
                            return index === details.genres.length - 1 ? <span key={index}> {genre.name} </span> : <span key={index}>{genre.name}  &#183;  </span>
                        })
                    }
                    <p>{details.overview}</p>
                </div>
                <div className={styles.Caraousal_ImageDiv}>
                    <img src={`https://image.tmdb.org/t/p/original${details.poster_path}`} />
                </div>
            </div>
            <button onClick={addMovieOrShowToWatchList}>Add To WatchList</button>
            <div className={styles1.videosContainer}>
                <p>Videos Associated With This : </p>
                <div className={styles1.videos}>
                    {
                        videos.map(video => {
                            return <iframe className={styles1.eachVideo} key = {video.id} width="400" height="300" src={`https://www.youtube.com/embed/${video.key}`} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default MovieOrShowDetail;