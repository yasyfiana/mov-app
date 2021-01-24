import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Cast from "./CastCard"
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 14,
      },
      contain: {
        justifyContent: "start",
        margin: theme.spacing(1),
    },
}));

const CastContain = () =>  {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
  
    return (
        <Grid container direction="column">
            <Grid item container>
                <Typography variant="h5" component="h2">
                    Cast & Crew
                </Typography>
            </Grid>
            <Grid item container >
                <Grid container className={classes.contain}>
                    <Grid item container>
                        <Cast/>
                    </Grid>
                    <Grid item container>
                        <Cast/>
                    </Grid>
                    <Grid item container>
                        <Cast/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
  }
  
  export default CastContain;