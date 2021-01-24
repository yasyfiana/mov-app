import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 14,
      },
  }));

const Summary = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid item container>
                <Typography variant="h5" component="h2">
                    Plot Summary
                </Typography>
            </Grid>
            <Grid item container>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </Grid>
        </Grid>
    );
  };
  
  export default Summary;