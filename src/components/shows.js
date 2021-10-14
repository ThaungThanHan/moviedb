import React, { Component,useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import NestedGridShows from '../materialui/showgrids';
const Shows = () => {
    const [shows,setShows] = useState();
    const [query,setQuery] = useState('');
    const fetchshows =(async(e)=>{
        const url = `https://api.themoviedb.org/3/search/tv?api_key=ce65fdc89d7b40c250cf269f97661585&query=${query}&include_adult=false`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setShows(data.results)
        }catch(err){
            console.log(err);
        }
        })
    useEffect(()=>{
        fetchshows();
    },[query]);

    return (
        <div>
            <div class="Header">
                <Link to="/"><h1 class="Header_logo">MovieSearch</h1></Link>
                <nav class="Header_links">
                    <h3 class="Header_links_link">TV Shows</h3>
                </nav>
                <div class="Header_dropdown">
                        <button class="Header_dropdown_button">Search
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="Header_dropdown_content">
                            <Link style={{textDecoration:'none'}} to="/"><p class="Header_dropdown_content_movies">Trending</p></Link>
                            <Link  style={{textDecoration:'none'}} to="/movies"><p class="Header_dropdown_content_shows">Movies</p></Link>
                        </div>
                    </div>
            </div>
            <div class="maindiv">
            <form class="Header_search">
                    <input class="Header_search_searchbox" name={query} type="text" placeholder="Search TV shows" value={query}
                    onChange={(e)=> setQuery(e.target.value)}/>
                </form>
                {shows ? (       // why i do like this? For mapping, we need data beforehand. 
                    <NestedGridShows shows={shows}/>              // useEffect runs on mount, so we dun have time to fetch data from search. so I put a h1 tag if movies state doesn't exists. So we get to the page without errors.
                 ):(<h1>Search for a TV show</h1>)}   
            </div>
        </div>
    )
        }
    

export default Shows;