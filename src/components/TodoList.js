import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/todosActions";

class TodoList extends Component {
  render() {
    let list = this.props.todos.map((todo, index) =>
      <div key={index}>
        <button onClick={() => this.props.deleteTodo(index)}>X</button>
        <h3>
          {todo.title}
        </h3>
        <p>
          {todo.description}
        </p>
      </div>
    );
    return (
      <div>
        {list}
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => ({ todos: state.todos });
let mapDispatchToProps = () => ({ deleteTodo });

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
