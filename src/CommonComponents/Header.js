import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    horozintalAlign: "center",
    verticalAlign: "center"
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const propsData = props.propsData;
  console.log(propsData, "Headerrrrrrrrrrr");
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {propsData.label}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
