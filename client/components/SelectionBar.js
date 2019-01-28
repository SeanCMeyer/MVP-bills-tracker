import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

const SelectionBar = ({ handleClick }) => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="zip code" />
        <InputGroupAddon addonType="append">
          <Button color="primary" />
        </InputGroupAddon>
        <p>place holder</p>
      </InputGroup>
    </div>
  );
};

export default SelectionBar;
