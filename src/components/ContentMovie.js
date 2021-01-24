import React from 'react';
import Card from './Moviecard';
import { Grid } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';

const ContentMovie = () => {
    return (
        <Grid container spacing= {2}>
            <Grid item xs={4}>
                <Card/>
            </Grid>
            <Grid item xs={4}>
                <Card/>
            </Grid>
            <Grid item xs={4}>
                <Card/>
            </Grid>
            <Grid item xs={4}>
                <Card/>
            </Grid>
        </Grid>

    )
}

export default ContentMovie;