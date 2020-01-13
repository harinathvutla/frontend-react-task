import React, { Component } from "react";
import Foods from "./Foods";
export default class Filters extends Component {
  state = {
    Meat: "true",
    Vegetable: "true",
    Fruit: "true"
  };

  handleChange = event => {
    const name = event.target.name;
    const checked = event.target.checked;
    this.setState({
      [name]: checked
    });
    console.log("HandleChange", event.target.name, event.target.checked);
  };

  render() {
    return (
      <>
        <div className="filters ml-3">
          <div className="filter bg-red">
            <input
              id="Meat"
              name="Meat"
              value="Meat"
              type="checkbox"
              defaultChecked
              onChange={this.handleChange}
            />
            <label htmlFor="Meat">Meat</label>
          </div>
          <div className="filter bg-green">
            <input
              id="Vegetable"
              name="Vegetable"
              value="Vegetable"
              type="checkbox"
              defaultChecked
              onChange={this.handleChange}
            />
            <label htmlFor="Vegetable">Vegetable</label>
          </div>
          <div className="filter bg-orange">
            <input
              id="Fruit"
              name="Fruit"
              value="Fruit"
              type="checkbox"
              defaultChecked
              onChange={this.handleChange}
            />
            <label htmlFor="Fruit">Fruit</label>
          </div>
        </div>
        <Foods filtersStatus={this.state}></Foods>
      </>
    );
  }
}
