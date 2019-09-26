import React, { Children } from "react";
import ReactDOM from "react-dom";
import Flexi from "./Components/FlexiComponent";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Flexi />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
