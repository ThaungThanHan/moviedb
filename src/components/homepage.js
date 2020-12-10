import React, { Component, useState,useEffect } from 'react';
import '../styles/main.scss';
import Header from '../components/header';
import { makeStyles } from '@material-ui/core/styles';
import NestedGrid from '../materialui/homegrids';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const HomePage = () => {
    const [trendings,setTrending] = useState([]); // setting state in functional componenet. (state_items,state)
    useEffect(async (e) => {                      // useEffect instead of life cycle functions in Functional component.
      const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=ce65fdc89d7b40c250cf269f97661585';
      try {const res = await fetch(url);
      const data = await res.json();
      setTrending(data.results);}
      catch(err){
        console.log(err);
      }
    });
    // const imagesrc = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+"{trending.poster_path}";
    return (
        <div>
        <Header/>
        <div className="maindiv">
        {/* {trendings.map((trending=>(
          <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${trending.poster_path}`} />
        )))} */}
        <NestedGrid trendings={trendings}/>
        </div>
        </div>
    )
}

export default HomePage;