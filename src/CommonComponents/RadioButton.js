import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function FormControlLabelPosition(props) {
  const propsData = props.propsData;
  console.log(propsData.options[0].label);
  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{propsData.label}</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="Male"
          control={<Radio color="primary" />}
          label={propsData.options[0].label}
          labelPlacement="end"
        />
        <FormControlLabel
          value="Female"
          control={<Radio color="primary" />}
          label={propsData.options[1].label}
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
