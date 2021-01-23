import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import './buttonGenre.css'

const useStyles = makeStyles((theme) => ({
    contain: {
      justifyContent: "start",
      margin: theme.spacing(1),
    },
    padd: {
        margin: theme.spacing(2),
    },
  }));

const Genre = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.contain}  >
            <Grid className={classes.padd}>
                <Button classes={{ root: 'button'}}>
                    Action
                </Button>
            </Grid>
            <Grid className={classes.padd}>
                <Button classes={{ root: 'button'}}>
                    Action
                </Button>
            </Grid>
            <Grid className={classes.padd}>
                <Button classes={{ root: 'button'}}>
                    Action
                </Button>
            </Grid>
            <Grid className={classes.padd}>
                <Button classes={{ root: 'button'}}>
                    Action
                </Button>
            </Grid>

        </Grid>
    );
  };
  
  export default Genre;