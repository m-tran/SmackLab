import React from "react";
import { Paper, Grid, makeStyles, Typography } from "@material-ui/core";
import "./Home.css";
import "../../App.css";
import Card from "../Card/Card";
import ProfileCard from "../Card/ProfileCard";
import Calc from "../Calculator";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "default",
  },
  palette: {
    type: "dark",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  }
}));

const Home = () => {
  const classes = useStyles();

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const currentUserName = currentUser.first_name;
  const letter = currentUserName[0];
  const fullName = currentUser.first_name + " " + currentUser.last_name;

  return (
    <div className="Home">
      <div className={classes.root}>
        <Grid container className="Title" spacing={3}>
          <Grid item xs={12}>
            <div className="userName">
              <Typography
                variant="h4"
                className="welcome"
                color="textPrimary"
                gutterBottom
              >
                <b>{currentUserName}</b>, welcome back!
              </Typography>
            </div>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <Grid container direction="column" spacing={3}>
                <Grid item xs={2} sm={2}>
                  <ProfileCard
                    title="Profile"
                    fullName={fullName}
                    letter={letter}
                    text="View Profile"
                    link="/profile"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={1}></Grid>
              <Grid item xs={10} sm={9}>
                <Grid container direction="row" spacing={3}>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={12} sm={11} direction="row">
                    <Calc title="Calculator" text="Find your Info" />
                  </Grid>
                </Grid>
              </Grid>  
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
}

export default Home;

