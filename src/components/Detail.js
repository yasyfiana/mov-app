import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Genre from "./Genre";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
            <Typography variant="h5" component="h2">
                Tittle
            </Typography>
            <Grid container>
                <Grid item xs={2}>
                    2019
                </Grid>
                <Grid item xs={2}>
                    PG-13
                </Grid>
                <Grid item xs={2}>
                    2H 33 MIN
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={2}>
          <Button>
              +
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Genre/>
        </Grid>
      </Grid>
    </div>
  );
}

