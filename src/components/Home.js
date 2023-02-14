import Caraousal from "./Caraousal";
import FetchMovies from "./FetchMoviesOrShows";
import * as Constants from "../Constants/Constants";
import FetchMoviesOrShows from "./FetchMoviesOrShows";

function Home(){
    return (
        <>
            <Caraousal />
            {
                Constants.moviesAndShows.map((eachItem, index) => {
                    return <FetchMoviesOrShows key={index} heading = {eachItem.heading} API_URL = {eachItem.API_URL} tag = {eachItem.tag}/>
                })
            }
        </>
    )
}


export default Home;