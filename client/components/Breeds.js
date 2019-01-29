import React from "react";

const Breeds = ({ breeds, name }) => {
  const mix = breeds.breed;
  if (Array.isArray(mix)) {
    return (
      <span>
        <h3>
          {name} is a mix of {mix.length} breeds!
        </h3>
        <ul>
          {mix.map((breed, index) => (
            <li key={index}>{breed.$t}</li>
          ))}
        </ul>
      </span>
    );
  } else {
    return (
      <span>
        <h3>{name}'s breed is: '</h3>
        <ul>
          <li>{mix.$t}</li>
        </ul>
      </span>
    );
  }
};

export default Breeds;
