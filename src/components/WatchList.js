import {useOutletContext} from "react-router-dom";
import styles from "../styles/WatchList.module.css";

function WatchList(){

    const {watchList} = useOutletContext();
    
    return (
        <div className={styles.WatchListContainer}>
            {
                watchList.map(watchItem => {
                    return <div key={watchItem.id} className={styles.WatchListItem}>
                        <img src={`https://image.tmdb.org/t/p/original${watchItem.poster_path}`} />
                    </div>
                })
            }
        </div>
    )
}


export default WatchList;