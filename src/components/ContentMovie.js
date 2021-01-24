import React from 'react';
import Card from './Moviecard';
import { Grid } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        // transform: 'translateZ(0)',
        justifyContent: "start",
        margin: theme.spacing(1),
      },
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      padd: {
        margin: theme.spacing(2),
    },
}));
const ContentMovie = () => {
    const classes = useStyles();

    return (
        // <div className={classes.root}>
            <Grid container className={classes.gridList} >
                <Grid item className={classes.padd}>
                    <Card/>
                </Grid>
                <Grid item className={classes.padd}>
                    <Card/>
                </Grid>
                <Grid item className={classes.padd}>
                    <Card/>
                </Grid>

            </Grid>
        // </div>
        
        // <Grid container spacing= {2}>
        //     <Grid item xs={4}>
        //         <Card/>
        //     </Grid>
        //     <Grid item xs={4}>
        //         <Card/>
        //     </Grid>
        //     <Grid item xs={4}>
        //         <Card/>
        //     </Grid>
        //     <Grid item xs={4}>
        //         <Card/>
        //     </Grid>
        // </Grid>

    )
}

export default ContentMovie;