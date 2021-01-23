import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    contain: {
      justifyContent: "start",
      margin: theme.spacing(1),
    },
  }));

const Type = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.contain}>
            <Grid item>
                <Button color="primary">In Theater</Button>
            </Grid>
            <Grid item>
                <Button color="primary">Box Office</Button>
            </Grid>
            <Grid item>
                <Button color="primary">Coming soon</Button>
            </Grid>
        </Grid>
    );
  };
  
  export default Type;