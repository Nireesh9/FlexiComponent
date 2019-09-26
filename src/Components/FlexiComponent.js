import React, { Children } from "react";
import ReactDOM from "react-dom";
import Header from "../CommonComponents/Header";
import Card from "../CommonComponents/CardView";
import TextField from "../CommonComponents/TextField";
import Button from "../CommonComponents/Button";
import RadioGruop from "../CommonComponents/RadioButton";
import MultipleCards from "../CommonComponents/MultipleCards";
import "../styles.css";
import Hoc from "../Hoc/Hoc";

class Flexi extends React.Component {
  render() {
    let { home } = this.props;
    console.log(home);
    const renderSwitch = Items => {
      let isChildrenAvalible = "children" in Items;

      console.log(Items, "ISCHILD");

      switch (Items.type) {
        case "Header":
          return <Header propsData={Items.props} />;
        case "Cards":
          return <MultipleCards propsData={Items.props} />;
        case "Card":
          if (isChildrenAvalible) {
            console.log("Callingchilgren");

            return Items.children.items.map((Item, Index) => (
              <Card> {renderSwitch(Item)}</Card>
            ));

            // return <Card ChildrenData={Items}  />;
          } else {
            return <Card ChildrenData={Items.props} />;
          }

        case "TexField":
          console.log("Textfieldis displaying");
          return <TextField propsData={Items.props} />;
        case "RadioGruop":
          console.log("Radio displaying");
          return <RadioGruop propsData={Items.props} />;
        case "Button":
          console.log("Button displaying");
          return <Button propsData={Items.props} />;
        default:
          return "foo";
      }
    };
    return (
      <div>
        {home.items.map((Items, Index) =>
          // Items.type === "Header" ? (
          //   <Header propsData={Items.props} />
          // ) : (
          //   <Card ChildrenData={Items.children} />
          // )
          renderSwitch(Items)
        )}
      </div>
    );
  }
}
export default Hoc()(Flexi);
