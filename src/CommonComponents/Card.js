import React, { Component } from "react";
import { Card } from "@material-ui/core";

class CardView extends Component {
  render() {
    var propsData = this.props.propsData;
    let color = propsData.color;
    console.log(propsData, "ufiuyfuf");

    const children = React.Children.map(this.props.children, child => {
      return <div>{child}</div>;
    });

    return (
      <div className="card">
        <div className="cardsinner" style={{ backgroundColor: "color" }}>
          <Card>
            <label>{propsData.label}</label>
            {children}
          </Card>
        </div>
      </div>
    );
  }
}

export default CardView;
