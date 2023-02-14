import React from "react";
import logo from "../assets/img/Disney_plus_logo.png";
import styles from "../styles/Navigation.module.css";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";

function Navigation(){

    function loginHandler(){
        console.log("Logged In User");
    }


    return (
        <nav className = {styles.navbar}>
            <div className = {styles.navbar_links_container}>
                <i className={`fa-solid fa-bars ${styles.navbar_ham_icon}`}></i>
                <Link to="/" className = {styles.navbar_logo}>
                    <img src={logo} alt="Disney Plus Logo" />
                </Link>
                <ul className={styles.navbar_links}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shows">TV</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/watchList">WatchList</Link></li>
                </ul>
            </div>
            <div className={styles.navbar_searchAndLogin}>
                <SearchBar className="searchBar"/>
                <button onClick={loginHandler}>Login</button>
            </div>
        </nav>
    )
}


export default Navigation;