import React from "react";
import Flexi from "../Components/FlexiComponent";
import hoc from "../Hoc/Hoc";
class Home extends React.Component {
  render(){​
const { config,submitfield,handleChange } = this.props;
    console.log(config, "props");
    return <Flexi items={home} submitfield={submitfield} handleChange={handleChange} />;
  }
}
export default hoc()(Home);
