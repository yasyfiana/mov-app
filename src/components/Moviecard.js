import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import './MovieCard.css'
// import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    padd: {

    }
  });

const MovieCard = () => {
    const classes = useStyles();
     return (
       <div className="grid-container">
         <div className = "grid-item">
            <div className = "grid-content">
                <div className = "poster">
                  <img src="/poster/archer.jpg"></img>
                </div>
            </div>
            <div className = "grid-content">
              <div className="title">
                <h2>ACHER</h2>
              </div>
              <Grid container>
                  <Grid item container>
                    <Rating name="rate" defaultValue={1} max={1} readOnly />
                  </Grid>
                  <Grid item Container>
                    8.3
                  </Grid>
              </Grid>
            </div>
         </div>
       </div>
      // <Card className={classes.root}>
      //   <CardActionArea>
      //     <div className={classes.padd}>
      //       <CardMedia
      //           component="img"
      //           alt="Contemplative Reptile"
      //           height="140"
      //           image='/poster/archer.jpg'
      //           title="Contemplative Reptile"
      //         />
      //     </div>
      //     <CardContent>
      //       <Typography gutterBottom variant="h5" component="h2">
      //         ARCHER
      //       </Typography>
      //       <Grid container>
      //         <Grid item container>
      //           <Rating name="rate" defaultValue={1} max={1} readOnly />
      //         {/* <Rating name="half-rating-read" defaultValue={1} precision={0.5} readOnly /> */}
      //         </Grid>
      //         <Grid item Container>
      //           8.2
      //         </Grid>
      //       </Grid>
      //     </CardContent>
      //   </CardActionArea>
      // </Card>
     );
};

export default MovieCard;
