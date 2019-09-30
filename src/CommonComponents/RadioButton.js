import React from "react";
import { Typography } from "@material-ui/core";
const RadioButtons = props => {
  const { propsData } = props;
  console.log(propsData, "yfgweiufgeaufhioeargiesgjrthjrtjhrtpjh");
  let { options } = propsData;

  console.log(options, "oooooooooo");
  return (
    <div>
      <Typography variant="h6" color="inherit">
        {propsData.label}:
      </Typography>
      <div>
        {options.map(option => {
          return (
            <React.Fragment>
              <input
                name={propsData.name}
                type="radio"
                value={option.label}
                onChange={props.handleChange}
              />
              {option.label}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default RadioButtons;
// {options.map(option=>{
//     return  (
//   <React.Fragment>
// <input name={option.name} type="radio" value={option.label} />{option.label}
// </React.Fragment>
// );
// })
// }
