import React, { Component } from 'react';
import ListEntry from './ListEntry.jsx';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            priority: '',
            todos: [
                {
                    name: 'example1',
                    priority: 5
                },
                {
                    name: 'example2',
                    priority: 10
                },
                {
                    name: 'example3',
                    priority: 15
                }
            ]
        }
        this.fetchTodos = this.fetchTodos.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    componentDidMount() {
        this.fetchTodos();
    }

    fetchTodos() {
        axios
        .get('/api')
        .then(results => this.setState({
            name: '',
            priority: '',
            todos: results.data }))
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state.name, this.state.priority))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.addTodo();
    }

    addTodo() {
        axios
        .post('/api', this.state)
        .then(this.fetchTodos)
    }

    deleteTodo(e, _id) {
        e.preventDefault();
        axios
        .delete(`/api/${_id}`)
        .then(this.fetchTodos)
    }

    updateTodo(e, _id, change) {
        e.preventDefault();
        axios
        .put(`/api/${_id}`, { priority: change })
        .then(this.fetchTodos)
    }

    render() {
        return(
            <div id="main">
                <h3>Todo List</h3>
                
                <div>
                    <h5>Add a todo:</h5>
                    <form>
                    <input name="name" type="text" value={this.state.name} onChange={this.handleInput}></input>
                    <input name="priority" type="number" value={this.state.priority} onChange={this.handleInput}></input>
                    <button onClick={this.handleSubmit}>submit</button>
                    </form>
                </div>

                <div>
                    <ul>
                        { this.state.todos.map((todo, i) => <ListEntry key={i} todo={todo} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>) }
                    </ul>
                </div>

            </div>
        )
    }

}

export default App;