import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "./TextField";
import Button from "./Button";
import RadioGruop from "./RadioButton";
const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const propsData = props.propsData;
  console.log(propsData, "CardsData2222");
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        {/* {ChildrenData.ChildrenData.items.map((Items, Index) =>
         
          renderSwitch(Items)
        )} */}
        o[ughfe0irugbs[dbnorsi]]
      </CardContent>
    </Card>
  );
}
