import * as Constants from "../Constants/Constants";
import FetchMoviesOrShows from "./FetchMoviesOrShows";

function TVShows(){
    return (
        <div>
            {
                Constants.shows.map((eachItem, index) => {
                    return <FetchMoviesOrShows key={index} heading = {eachItem.heading} API_URL = {eachItem.API_URL} tag={eachItem.tag}/>
                })
            }
        </div>
    )
}


export default TVShows;