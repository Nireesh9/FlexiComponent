import React, { Children } from "react";
import ReactDOM from "react-dom";
import Header from "./CommonComponents/Header";
import Card from "./CommonComponents/CardView";
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
    return (
      <div>
        {flexConfigForRegistration.items.map((Items, Index) =>
          Items.type === "Header" ? (
            <Header propsData={Items.props} />
          ) : (
            <Card ChildrenData={Items.children} />
          )
        )}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
