import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { CastForEducationRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  ava: {
    justifyContent: "center",
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const CastCard = () =>  {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    
    <Card className={classes.root} variant="outlined">
        <CardContent>
            <div className={classes.ava}>
                <Avatar alt="Remy Sharp" src="/Ava/ava.jpeg" />
            </div>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Ken Grate
            </Typography>
            <Typography variant="body2" component="p">
                Director
            </Typography>
        </CardContent>
    </Card>
  );
}

export default CastCard;