import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    contain: {
      justifyContent: "start",
      margin: theme.spacing(1),
    },
    button:{
        
    },
    label:{
        color: "Black",
    },

  }));

const Type = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.contain}>
            <Grid item>
                <Button 
                    classes={{
                        root: classes.button,
                        label: classes.label,
                    }}
                >
                    In Theater
                </Button>
            </Grid>
            <Grid item>
                <Button 
                    classes={{
                        root: classes.button,
                        label: classes.label,
                    }}
                >
                    Box Office
                </Button>
            </Grid>
            <Grid item>
                <Button 
                    classes={{
                        root: classes.button,
                        label: classes.label,
                    }}
                >
                    Coming Soon
                </Button>
            </Grid>
        </Grid>
    );
  };
  
  export default Type;