import React, { useEffect } from 'react';
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
    height:"auto",
    "font-size":"1.5rem"
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
  }
}));

export default function ShowOverviewGrid(props) {
  const classes = useStyles();
  const genres = props.showdetails.genres;
  // const genre = genres[0].id;
  // useEffect(()=>{
  //   console.log(genre)
  // })
  const imagesrc = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.showdetails.poster_path}`
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
                {/* {props.showdetails.tagline !== "" ? 
                (<h3 classesName={classes.tagline}>"{props.showdetails.tagline}"</h3><br/>):
                (<h3 classesName={classes.tagline}>None</h3><br/>)}; */}
                <h3>Genres:</h3>
                <p className="genres_box">
                  {genres ? 
                  genres.map(genre=>{
                    return <p className={classes.genres_genre}>{genre.name}</p>
                  }):null}
                </p>
                <h3 classesName={classes.tagline}>
                    {props.showdetails.tagline ? (<p>{props.showdetails.tagline}</p>) : ""}    
                </h3><br/>
                <p>Released Date: {props.showdetails.first_air_date}</p><br/>
                <p>Episodes: {props.showdetails.episode_run_time} episodes</p><br/>
                <h4>Overview:</h4>
                <p>{props.showdetails.overview}</p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <img className={classes.poster}src={imagesrc}/>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div>
              <h3>Produced By</h3><br/>
              {/* <h4>{props.showdetails.production_companie}</h4> */}

            </div>
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