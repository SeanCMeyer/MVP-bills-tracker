import React, { Component } from "react";
import SelectionBar from "./SelectionBar";
import AnimalView from "./AnimalView";
import axios from "axios";
require("dotenv").config();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentAnimal: null
    };
  }
  getRandomAnimal() {
    axios
      .get("/api/getRandomAnimal")
      .then(res => {
        this.setState({
          currentAnimal: res
        });
      })
      .catch(err => console.error(err));
  }

  handleClick() {}

  componentDidMount() {
    this.getRandomAnimal();
  }

  render() {
    return (
      <div>
        <SelectionBar handleClick={this.handleClick} />
        <AnimalView currentAnimal={this.state.currentAnimal} />
        <p>Hi There</p>
      </div>
    );
  }
}
