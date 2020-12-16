import React, { useEffect,useState } from 'react';
import "../styles/overview.scss";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:"1rem",
    "padding-right":"1rem"
  },
  paper: {
    padding: theme.spacing(1),
    padding:"0rem",
    textAlign: 'center',
    color: theme.palette.text.secondary,
    "min-height":"40rem",
    "font-size":"1.5rem",

  },
  poster:{
    width:"100%",
    height:"50rem"
  },
  tagline:{
    "font-style":"italic",
    color:"red"
  },
  genres_genre:{
    border:"1px solid #28b485",
    height:"2rem",
    padding:"4px"
  },
  companyimage:{
    width:"5rem"
  }
}));

export default function OverviewGrid(props) {
  const classes = useStyles();
  const genres = props.moviedetails.genres;
  const companies = props.moviedetails.production_companies;
  // while(index < genres.length){
  //   console.log(genres[index].name)
  // }
  // for (const genre in genres){                                  // This takes out genres from genres
  //   const types = genres[genre].name;
  //   setTypes(types);
  // }
  // const genre = genres[0].id;
  // useEffect(()=>{
  //   console.log(genre)
  // })
  const imagesrc = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.moviedetails.poster_path}`;
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
            <h3 classesName={classes.tagline}>
                    {props.moviedetails.tagline ? (<p>"{props.moviedetails.tagline}"</p>) : ""}    
            </h3><br/>
            <h6>Genres:</h6>
            <p className="genres_box">
              {genres ? genres.map((genre)=>{
                return <p className={classes.genres_genre}>{genre.name}</p>
              }): null}
            </p><br/>
                <p>Released Date: {props.moviedetails.release_date}</p><br/>
                <p>Runtime: {props.moviedetails.runtime} minutes</p><br/>
                <h4>Overview:</h4>
                <p>{props.moviedetails.overview}</p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <img className={classes.poster}src={imagesrc}/>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h3>Produced By:</h3><br/>
              {companies ? companies.map(company=>{
                return <img className={classes.companyimage} src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}/>
              }):null}
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}