import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import foodInfo from "../foodInfo.json";

export default class Foods extends Component {
  render() {
    return (
      <div className="food-container">
        {foodInfo.map(food => {
          return (
            <>
              {this.props.filtersStatus[food.category] && (
                <Card
                  style={{ width: "19rem", margin: "1rem" }}
                  key={food.name}
                >
                  <Card.Img
                    style={{ height: "12rem" }}
                    variant="top"
                    src={food.image}
                  />
                  <Card.Body>
                    <div className="card-heading">
                      <Card.Title className="card-title">
                        {food.name}
                      </Card.Title>
                      <p style={{ backgroundColor: food.color }}>
                        {food.category}
                      </p>
                    </div>

                    <Card.Text>{food.description}</Card.Text>
                    <p>
                      <span style={{ color: food.color }}>&gt; </span>
                      <a
                        style={{
                          color: "black",
                          textDecorationColor: food.color
                        }}
                        href={food.link}
                      >
                        More Info
                      </a>
                    </p>
                  </Card.Body>
                </Card>
              )}{" "}
            </>
          );
        })}
      </div>
    );
  }
}
