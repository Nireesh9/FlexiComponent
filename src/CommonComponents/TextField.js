import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function FilledTextFields(props) {
  const propsData = props.propsData;
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    Label: propsData.label,
    type: propsData.inputType,
    multiline: "Controlled",
    currency: "EUR"
  });

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="filled-name"
        label={values.Label}
        className={classes.textField}
        type={values.type}
        margin="normal"
        variant="filled"
      />
    </form>
  );
}
