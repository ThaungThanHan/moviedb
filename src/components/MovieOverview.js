import React, { Component, useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import OverviewGrid from '../materialui/overviewgrids';
const MovieOverview = (props) => {
        const [moviedetails,setMoviedetails] = useState("");
        useEffect((props)=>{
            fetchdetails(props);
        })
        const fetchdetails = (async() => {
            const {id} = props.match.params;
            try{
                const url = `https://api.themoviedb.org/3/movie/${id}?api_key=ce65fdc89d7b40c250cf269f97661585`;
                const res = await fetch(url);
                const data = await res.json();
                console.log(id)
                console.log(data)
                setMoviedetails(data);
            }catch(err){
                console.log(err);
            }
        })
        return (
            <div>
            <div class="Header">
                <Link to="/"><h1 class="Header_logo">MovieSearch</h1></Link>
                <nav class="Header_links">
                    <h3 class="Header_links_link">{moviedetails.title}</h3>
                </nav>
                <div class="Header_dropdown">
                        <button class="Header_dropdown_button">Search
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="Header_dropdown_content">
                            <Link to="/"><p>Trending</p></Link>
                            <Link to="/movies"><p>Movies</p></Link>
                            <Link to="/shows"><p>TV Shows</p></Link>
                        </div>
                </div>
            </div>
            <OverviewGrid moviedetails={moviedetails}/>
            </div>
        );
    }

export default MovieOverview;