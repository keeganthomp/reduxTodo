import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todosActions";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {title: "sdfsdf", description: "sdsdf"}
    };
  }

  updateTod(e) {
    let todo = this.state.todo;
    todo[e.target.name] = e.target.value;
    this.setState({ todo });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.updateTodo}
          name="title"
          placeholder="New Todo"
        />
        <input
          type="text"
          onChange={this.updateTodo}
          name="description"
          placeholder="Notes:--"
        />
        <button onClick={() => this.props.addTodo(this.state.todo)}>
          submit
        </button>
      </div>
    );
  }
}

//for data
const mapStateToProps = (state, ownProps) => ({});
//for functions
const mapDispatchToProps = dispatch => ({
  addTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
