import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function ContainedButtons(props) {
  const propsData = props.propsData;
  const submitfield = props.submitfield;
  console.log(propsData, "fghoyivb");

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={submitfield}
        className={classes.button}
      >
        {propsData.label}
      </Button>
    </div>
  );
}
