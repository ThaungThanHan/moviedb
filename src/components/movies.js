import React, { Component,useState,useEffect } from 'react';
import '../styles/header.scss';
import {Link} from 'react-router-dom';
import HeaderSearch from '../components/headersearch';
import NestedGridMovies from '../materialui/moviegrids';

const Movies = () => {
    const [movies,setMovies] = useState("");
    const [query,setQuery] = useState('Batman');
    const fetchMovies = (async() => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=ce65fdc89d7b40c250cf269f97661585&language=en-US&query=${query}&page=1&include_adult=false`; 
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);
        }catch(err){
            console.log(err);
        }
    })
    useEffect(()=>{
        fetchMovies();
    },[query]);
    // const searchMovies = async (e) => {
    //     const url = `https://api.themoviedb.org/3/search/movie?api_key=ce65fdc89d7b40c250cf269f97661585&language=en-US&query=${query}&page=1&include_adult=false`; 
    //     try{
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         console.log(data);
    //         setMovies(data.results);
    //     }catch(err){
    //         console.log(err);
    //     }
    // };
    // setsearchMovies(searchMovies);
    return (
        <div>
            <div class="Header">
                <Link to="/"><h1 class="Header_logo">MovieSearch</h1></Link>
                <nav class="Header_links">
                    <h3 class="Header_links_link">Movies</h3>
                </nav>
                <div class="Header_dropdown">
                        <button class="Header_dropdown_button">Search
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="Header_dropdown_content">
                            <Link to="/"><p>Trending</p></Link>
                            <a href="#">TV Shows</a>
                        </div>
                    </div>
            </div>
            <div class="maindiv">
            <form class="Header_search">
                    <input class="Header_search_searchbox" name={query} type="text" placeholder="Search Movies" value={query}
                    onChange={(e)=> setQuery(e.target.value)}/>
                </form>
                {movies ? (       // why i do like this? For mapping, we need data beforehand. 
                    <NestedGridMovies movies={movies}/>              // useEffect runs on mount, so we dun have time to fetch data from search. so I put a h1 tag if movies state doesn't exists. So we get to the page without errors.
                 ):(<h1>Search for a movie</h1>)}   
            </div>
        </div>
    )
}

export default Movies;