import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Type from "./Type";
import Genre from "./Genre";
import Content from "./ContentMovie";

const LandingPage = () => {
     return (
        <Grid container direction="column">
            <Grid>
                <Header/>
            </Grid>
            <Grid item container>
                <Type/>
            </Grid>
            <Grid item container>
                <Genre/>
            </Grid>
            <Grid item container>
                <Content/>
            </Grid>
        </Grid>
     );
};

export default LandingPage;