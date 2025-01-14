import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.resubmitEdit = this.resubmitEdit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(todoToDelete) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo !== todoToDelete),
    }));
  }

  startEdit(index) {
    this.setState({
      editingIndex: index,
      editingVal: this.state.todos[index],
    });
  }

  handleEditChange(e) {
    this.setState({
      editingVal: e.target.value,
    });
  }

  resubmitEdit(index) {
    const updatedTodos = [...this.state.todos];
    updatedTodos[index] = this.state.editingVal;

    this.setState({
      todos: updatedTodos,
      editingIndex: null,
      editingVal: "",
    });
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <Count todos={this.state.todos} />
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {this.state.editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={this.state.editingVal}
                    onChange={this.handleEditChange}
                  />
                  <button onClick={() => this.resubmitEdit(index)}>
                    Resubmit
                  </button>
                </>
              ) : (
                <>
                  {todo}
                  <button onClick={() => this.startEdit(index)}>Edit</button>
                  <button onClick={() => this.handleDelete(todo)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export { ClassInput };

class Count extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        <h4>Todo Count: {todos.length}</h4>
      </div>
    );
  }
}
