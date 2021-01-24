import React from "react";
import { Grid } from "@material-ui/core";
import CastContain from "./CastContain"
import Summary from "./Summary";
import Detail from "./Detail";
import Cover from "./Cover";


const DetailPage = () => {
     return (
        <Grid container direction="column">
            <Grid item container>
                <Cover/>
            </Grid>
            <Grid item container>
                <Detail/>
            </Grid>
            <Grid item container>
                <Summary/>
            </Grid>
            <Grid item container>
                <CastContain/>
            </Grid>
        </Grid>
     );
};

export default DetailPage;