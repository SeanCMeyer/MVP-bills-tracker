import React from "react";
import Breeds from "./Breeds";
import PhotoViewer from "./PhotoViewer";
import { Row, Col, ListGroup } from "reactstrap";

const AnimalView = props => {
  if (props.currentAnimal === null) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  } else {
    // Image designation and approximate size:
    // pnt = 60x80
    // fpm = 95x117
    // x = 500x665
    // pn = 220x282
    // t = 50x45
    const pet = props.currentAnimal.data;
    console.log(pet);
    const photos = pet.media.photos.photo;
    const largePhotos = [];
    const thumbNails = [];
    const other = [];
    photos.forEach(image => {
      image["@size"] === "x"
        ? largePhotos.push(image.$t)
        : image["@size"] === "pnt"
        ? thumbNails.push(image.$t)
        : other.push(image.$t);
    });
    const name = pet.name.$t;
    const age = pet.age.$t;
    console.log(pet);
    const Age = () => {
      if (!age) {
        return <div />;
      }
      if (age === "Adult") {
        return (
          <h6>
            {name} is an {age}!
          </h6>
        );
      } else if (age === "Young") {
        return (
          <h6>
            {name} is {age}!
          </h6>
        );
      } else {
        return (
          <h6>
            {name} is a {age}!
          </h6>
        );
      }
    };

    return (
      <div>
        <Row>
          <Col>
            <strong>
              <h2>{pet.name.$t}</h2>
              <sub>{pet.animal.$t}</sub>
              <Age />
            </strong>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{pet.description.$t}</p>
          </Col>
          <Col>
            <PhotoViewer images={largePhotos} thumbs={thumbNails} />
            <Row>
              <Breeds breeds={pet.breeds} name={pet.name.$t} />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
};

export default AnimalView;
