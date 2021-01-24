import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },

  });

const Cover = () => {
    const classes = useStyles();
     return (
        <div>
            <Box>
                <img src="/poster/archer.jpg">
                </img>
            </Box>
            <Grid container>
                <Grid item xs={2}>
                    <Grid container direction="coloum">
                        <Grid item container>
                            icons
                        </Grid>
                        <Grid item container>
                            Rate
                        </Grid>
                        <Grid item container>
                            Date
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                <Grid container direction="coloum">
                        <Grid item container>
                            icons
                        </Grid>
                        <Grid item container>
                            Rate
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                <Grid container direction="coloum">
                        <Grid item container>
                            score
                        </Grid>
                        <Grid item container>
                            Metascroe
                        </Grid>
                        <Grid item container>
                            view
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
     );
};

export default Cover;