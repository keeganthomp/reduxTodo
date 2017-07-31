import React, { Component } from "react";

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      todo: {}
    };
  }

  updateTodo(e) {
    let todo = this.state.todo;
    todo[e.target.name] = e.target.value;
    this.setState({ todo });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateTodo} name="title" placeholder="New Todo" />
        <input type="text" onChange={this.updateTodo} name="description" placeholder="Notes:--" />
        <button>submit</button>
      </div>
    );
  }
}
