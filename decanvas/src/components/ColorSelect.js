import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const ColorSelect = (props) => {
  const [color, setColor] = useState("");

    const colorChangeHandler = (c) => {
        setColor(c)
        props.passColor(color);
    }

  return (<><HexColorPicker color={color} onChange={colorChangeHandler}/><p>{color}</p></>);
};

export default ColorSelect;
