import React, { Component } from "react";
import PetSelection from "./PetSelection";
import AnimalView from "./AnimalView";
import axios from "axios";
import { Jumbotron, Container, Row, Col } from "reactstrap";
require("dotenv").config();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentAnimal: null
    };
    this.getAnimal = this.getAnimal.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  getAnimal(animal) {
    axios
      .get(`/api/getAnimal/${animal}`)
      .then(res => {
        this.setState({
          currentAnimal: res
        });
      })
      .catch(err => console.error(err));
  }

  // handleFormSubmit(zip) {
  //   axios
  //     .get(`/api/getAnimal/${zip}`)
  //     .then(response => {
  //       console.log(response);
  //       // this.setState({
  //       //   currentShelter: res
  //       // });
  //     })
  //     .catch(err => console.error(err));
  // }

  componentDidMount() {
    this.getAnimal("dog");
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              <Col sm={{ size: "auto", offset: 4 }}>
                <h1 className="display-2">Dander!!</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={{ size: "auto", offset: 4 }}>
                <h5>The pet adoption app!</h5>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <PetSelection handleClick={this.getAnimal} />
            </Col>
          </Row>
          <Row>
            <Col>
              <AnimalView currentAnimal={this.state.currentAnimal} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
