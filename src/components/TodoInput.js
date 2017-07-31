import React, { Component } from "react";

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      todo: {}
    };
  }

  render() {
    return (
      <div>
        <input type="text" name="title" placeholder="New Todo" />
        <input type="text" name="description" placeholder="Notes:--" />
      </div>
    );
  }
}
