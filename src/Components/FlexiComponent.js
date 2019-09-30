import React, { Children } from "react";
import ReactDOM from "react-dom";
import Hoc from "../Hoc/Hoc";

class Flexi extends React.Component {
  render() {
    let { home, register, handleChange, submitfield } = this.props;
    let { items } = home;
    // const renderSwitch = Items => {
    //   let isChildrenAvalible = "children" in Items;

    //   switch (Items.type) {
    //     case "Header":
    //       return <Header propsData={Items.props} />;
    //     case "Cards":
    //       return <MultipleCards propsData={Items.props} />;
    //     case "Card":
    //       if (isChildrenAvalible) {
    //         return (
    //           <CardView propsData={Items.props}>
    //             {Items.children.items.map((Item, Index) => {
    //               return <div> {renderSwitch(Item)}</div>;
    //             })}
    //           </CardView>
    //         );
    //       } else {
    //         return <CardView propsData={Items.props} />;
    //       }

    //     case "TexField":
    //       return (
    //         <TextField propsData={Items.props} handleChange={handleChange} />
    //       );
    //     case "RadioGruop":
    //       return (
    //         <RadioGruop propsData={Items.props} handleChange={handleChange} />
    //       );
    //     case "Button":
    //       return <Button propsData={Items.props} submitfield={submitfield} />;
    //     default:
    //       return "foo";
    //   }
    // };

    const renderSwitch = Items => {
      let isChild = "children" in Items;
      console.log(Items.type, "flexiconfigqedweqfqw");
      if (isChild) {
        console.log(Items.children, "Item child");
        return Items.children.items.map((Data, Index) => {
          return <div>{renderSwitch(Data)}</div>;
        });
      } else {
        // const Components = require(../Flexi/${item.type}).default;
        const Components = require(`../CommonComponents/${Items.type}`).default;

        return (
          <Components
            propsData={Items.props}
            handleChange={handleChange}
            submitfield={submitfield}
          />
        );
      }
    };
    return <div>{items.map((Items, Index) => renderSwitch(Items))}</div>;
  }
}
export default Hoc()(Flexi);
