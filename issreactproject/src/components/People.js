import React from "react";

const Person = ({ name }) => (
    <div className="People_item">
        <div className="People_item-img"></div>
        <div className="People_item-name">{name}</div>
    </div>
);

const People = ({ people }) => (
    <div className="People">
        {people.map((person, index) => <Person key={index} {...person}/>)}
        <div className="People_amount">Total amount: {people.length} people on ISS</div>
    </div>
);

export default People;
