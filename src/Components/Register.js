import React from "react";
import Flexi from "../Components/FlexiComponent";
import hoc from "../Hoc/Hoc";
class Register extends React.Component {
  render(){​
const { config,submitfield,handleChange } = this.props;
    console.log(config, "props");
    return <Flexi items={register} submitfield={submitfield} handleChange={handleChange} />;
  }
}
export default hoc()(Register);
