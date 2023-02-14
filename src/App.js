import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Movies from "./components/Movies";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieOrShowDetail from "./components/MovieOrShowDetail";
import WatchList from "./components/WatchList";




function App(){

    const [watchList, setWatchList] = useState([]);

    function addToWatchList(details){
        setWatchList(currentState => {
            return [...currentState, details];
        });
    }
    

    return (
        <div className = "App">
            <Navigation />
            <Outlet context={{addToWatchList, watchList}}/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/movies",
                element: <Movies />
            },
            {
                path: "/shows",
                element: <TVShows />
            },
            {
                path: "/movies/:id",
                element: <MovieOrShowDetail name="movie"/>
            },
            {
                path: "/shows/:id",
                element: <MovieOrShowDetail name="tv"/>
            },
            {
                path: "/watchList",
                element: <WatchList />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />)