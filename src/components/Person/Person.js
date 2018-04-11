import React from 'react';

import './Person.css';

const person = (props) => (
    <div className="Person" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <h4>Age: {props.age}</h4>
    </div>
);

export default person;