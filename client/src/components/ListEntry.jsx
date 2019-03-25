import React from 'react';

const ListEntry = (props) => {
    let { key, todo, deleteTodo, updateTodo } = props;

    return(

        <li>
            Name: {todo.name} <br />
            Priority: {todo.priority} <br />
            <button onClick={(e, _id, change) => updateTodo(e, todo._id, todo.priority + 1)}>+</button>
            <button onClick={(e, _id, change) => updateTodo(e, todo._id, todo.priority - 1)}>-</button>
            <button onClick={(e, _id) => deleteTodo(e, todo._id)}>delete</button>
            <br /><br />
        </li>

    )
}

export default ListEntry;