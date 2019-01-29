import React, { Component } from "react";
import { Button, Row, Col } from "reactstrap";

export default class PetSelection extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { id } = event.target;
    this.props.handleClick(id);
  }
  // pet types:
  // barnyard, bird, cat, dog, horse, reptile, smallfurry

  render() {
    return (
      <div>
        <Col>
          <Row>
            <Button
              onClick={this.handleClick}
              outline
              color="info"
              id="barnyard"
            >
              Barnyard
            </Button>
            <Button onClick={this.handleClick} outline color="info" id="bird">
              Bird
            </Button>
            <Button onClick={this.handleClick} outline color="info" id="cat">
              Cat
            </Button>
            <Button onClick={this.handleClick} outline color="info" id="dog">
              Dog
            </Button>
            <Button onClick={this.handleClick} outline color="info" id="horse">
              Horse
            </Button>
            <Button
              onClick={this.handleClick}
              outline
              color="info"
              id="reptile"
            >
              Reptile
            </Button>
            <Button
              onClick={this.handleClick}
              outline
              color="info"
              id="smallfurry"
            >
              Small and Furry
            </Button>
          </Row>
        </Col>
      </div>
    );
  }
}
