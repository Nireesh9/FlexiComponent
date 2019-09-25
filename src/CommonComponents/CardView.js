import React, { Component } from "react";

// function Card(props) {
class Card extends Component {
  render() {
    // let names = props.data;

    // let type = names.items;

    // console.log(type)

    // console.log(this.props.childern,"text");

    const children = React.Children.map(this.props.children, child => {
      return <div>{child}</div>;
    });

    return (
      <div className="card">
        <div className="cardsinner">{children}</div>
      </div>
    );
  }
}

export default Card;
