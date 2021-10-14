import React from 'react';
import '../styles/poster.scss';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "margin-left":"6rem"
  },
  paper: {
    padding: theme.spacing(3),
    color:"black",
    "margin-left":"1rem",
    "margin-top":"1rem",
    width:"12rem",
    height:"15rem",
    textAlign: 'center',
    "&:hover":{display:"none"},
    color: theme.palette.text.secondary,
  },
  poster:{
    "max-width":"100%",
    height:"auto",
    "&:hover":{display:"none"}
  }
}));

export default function NestedGrid(props) {
  const classes = useStyles();
    function FormRow() {
    return (
        <React.Fragment>
        {props.trendings.map((trending=>(
        <Grid item xs={2}>
          <div className="poster">
          <p className="poster_title">Title:   {trending.title}</p>
          <Link to={`/movies/${trending.id}`}><img className="poster_img" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${trending.poster_path}`} /></Link>
          </div>
        </Grid>
        )))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={14} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}