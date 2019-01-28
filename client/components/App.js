import React, { Component } from "react";
import SelectionBar from "./SelectionBar";
import AnimalView from "./AnimalView";
import axios from "axios";
require("dotenv").config();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentAnimalID: 1
    };
  }

  componentDidMount() {
    this.getAnimal();
  }

  getAnimal(animalID) {
    axios.get("");
  }

  handleClick() {
    console.log("hi I'm getting a pet");
  }

  render() {
    return (
      <div>
        <SelectionBar handleClick={this.handleClick} />
        <AnimalView />
        <p>Hi There</p>
      </div>
    );
  }
}
