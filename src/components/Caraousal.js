import React, {useState, useEffect} from "react";
import styles from "../styles/Caraousal.module.css";
import * as constants from "../Constants/Constants";
import Carousel from 'react-elastic-carousel';

const API_Arr_data = [];

function Caraousal(){

    const [caraousalData, setCaraousalData] = useState([]);
    const [items, setItems] = useState([1, 2, 3, 4]);

    useEffect(() => {
        getCaraousalData();
    }, []);

    async function getCaraousalData(){
        const responseObj1 = await fetch(`https://api.themoviedb.org/3/movie/470?api_key=${constants.API_KEY}`);
        const responseObj2 = await fetch(`https://api.themoviedb.org/3/movie/300?api_key=${constants.API_KEY}`);
        const responseObj3 = await fetch(`https://api.themoviedb.org/3/movie/310?api_key=${constants.API_KEY}`);
        const responseObj4 = await fetch(`https://api.themoviedb.org/3/movie/500?api_key=${constants.API_KEY}`);
        const responseObj5 = await fetch(`https://api.themoviedb.org/3/movie/400?api_key=${constants.API_KEY}`);

        const response1 = await responseObj1.json();
        const response2 = await responseObj2.json();
        const response3 = await responseObj3.json();
        const response4 = await responseObj4.json();
        const response5 = await responseObj5.json();
        
        API_Arr_data.push(response1, response2, response3, response4, response5);
        setCaraousalData(API_Arr_data);
    }

    return (
        <>
            {
                caraousalData.length === 0
                ?
                <h1 className={styles.loader}>Loading....</h1>
                :
                <Carousel enableAutoPlay>
                        {
                            caraousalData.map(item => {
                                return <div key = {item.id} className={styles.Caraousal_Container}>
                                    <div className={styles.Caraousal_content}>
                                        <h1>{item.original_title}</h1>
                                        {
                                            item.genres.map((genre, index) => {
                                                return index === item.genres.length - 1 ? <span key={index}> {genre.name} </span> : <span key={index}>{genre.name}  &#183;  </span>
                                            })
                                        }
                                        <p>{item.overview}</p>
                                    </div>
                                    <div className={styles.Caraousal_ImageDiv}>
                                        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                                    </div>
                                </div>
                                
                            })
                        }
                </Carousel>
            }
            
        </>   
    )
}


export default Caraousal;