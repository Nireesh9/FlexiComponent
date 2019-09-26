import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const propsData = props.propsData;
  console.log(propsData, "jvgu");
  return (
    <div>
      {propsData.cards.map((Items, Index) => (
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardContent> {Items.label}</CardContent>
          </Card>
        </Grid>
      ))}
    </div>
  );
}
