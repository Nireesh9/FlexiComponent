import React, { Children } from "react";
import ReactDOM from "react-dom";
import Header from "./CommonComponents/Header";
import Card from "./CommonComponents/CardView";
import TextField from "./CommonComponents/TextField";
import Button from "./CommonComponents/Button";
import RadioGruop from "./CommonComponents/RadioButton";
import Cards from "./CommonComponents/Cards";
import "./styles.css";
const flexConfigForRegistration = {
  items: [
    {
      type: "Card",
      props: {
        label: "Good work labs",
        horozintalAlign: "left"
      }
    },
    {
      type: "Header",
      props: {
        label: "Technology",
        horozintalAlign: "left"
      }
    },
    {
      type: "Card",
      props: {
        color: "grey"
      },
      children: {
        items: [
          {
            type: "Cards",
            props: {
              cards: [
                {
                  label: "Java",
                  horizontalAlign: "center",
                  verticalAlign: "center",
                  color: "orange"
                },
                {
                  label: "React",
                  horizontalAlign: "center",
                  verticalAlign: "center",
                  color: "blue"
                },
                {
                  label: "Node",
                  horizontalAlign: "center",
                  verticalAlign: "center",
                  color: "pink"
                }
              ]
            }
          }
        ]
      }
    },
    {
      type: "Header",
      props: {
        label: "Drop Message",
        horozintalAlign: "left"
      }
    },
    {
      type: "Card",
      props: {
        color: "grey",
        horizontalAlign: "center",
        verticalAlign: "center"
      },
      children: {
        items: [
          {
            type: "TexField",
            props: {
              inputType: "text",
              label: "Name",
              name: "name"
            }
          },
          {
            type: "TexField",
            props: {
              inputType: "email",
              label: "Email",
              name: "email"
            }
          },
          {
            type: "TexField",
            props: {
              inputType: "number",
              label: "Mobile",
              name: "Message"
            }
          },
          {
            type: "Button",
            props: {
              label: "Submit"
            }
          }
        ]
      }
    }
  ]
};

class App extends React.Component {
  render() {
    const renderSwitch = Items => {
      let isChildrenAvalible = "children" in Items;

      console.log(Items, "ISCHILD");

      switch (Items.type) {
        case "Header":
          return <Header propsData={Items.props} />;
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
        case "Cards":
          console.log("MultipleCardsDisplaying");
          return <Cards propsData={Items.props} />;
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
        {flexConfigForRegistration.items.map((Items, Index) =>
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
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
