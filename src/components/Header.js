import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  menuButton: {
    color:"black",
    edge: "start",
  },
  navBar: {
    background: "white",
    display: "flex",
    position: "static",
  },
  search:{
    color:"black",
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
      <AppBar elevation={0} className={classes.navBar} >
        <Toolbar>
        <Grid container justify="space-between" spacing={24}>
            <Grid item>
                <IconButton className={classes.menuButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton aria-label="search" className={classes.search}>
                    <SearchIcon />
                </IconButton>
            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
  );
};

export default Header;

