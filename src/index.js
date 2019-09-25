import React, { Children } from "react";
import ReactDOM from "react-dom";
import Header from "./CommonComponents/Header";
import Card from "./CommonComponents/CardView";
import TextField from "./CommonComponents/TextField";
import Button from "./CommonComponents/Button";
import RadioGruop from "./CommonComponents/RadioButton";
import "./styles.css";
const flexConfigForRegistration = {
  items: [
    {
      type: "Header",
      props: {
        label: "Registration",
        horozintalAlign: "center",
        verticalAlign: "center"
      }
    },
    {
      type: "Card",
      props: {
        color: "grey",
        horozintalAlign: "left"
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
            type: "RadioGruop",
            props: {
              label: "Gender",
              name: "gender",
              options: [
                {
                  label: "Male"
                },
                {
                  label: "Female"
                }
              ]
            }
          },
          {
            type: "TexField",
            props: {
              inputType: "password",
              label: "Password",
              name: "password"
            }
          },
          {
            type: "TexField",
            props: {
              inputType: "password",
              label: "Confirm Password",
              name: "confirmPassword"
            }
          },
          {
            type: "Button",
            props: {
              label: "Register"
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
            {
              Items.children.items.map((Item, Index) => renderSwitch(Item));
            }
            return <Card ChildrenData={Items} />;
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
