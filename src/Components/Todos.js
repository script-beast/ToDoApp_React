import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
    const myStyle = {
        minHeight:"70vh"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="text-center my-3">ToDos List: </h3>
            {!props.todos.length && <h4>No ToDo Found</h4>}
            {props.todos.map(todo => ( <Todo key={todo.sno} todo={todo} id={todo.sno} onDelete={props.onDelete}/>))}
        </div>
    )
}
