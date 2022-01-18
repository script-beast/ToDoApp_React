import React from 'react'

export default function Todo(props) {
    return (
        <div >
            <div className="card my-3">
                <div className="card-header text-center">
                    <h4>{props.todo.title}</h4>
                </div>
                <div className="card-body clearfix">
                    <p className="card-text">{props.todo.desc}</p>
                    <div className="tad">
                        <button className="btn btn-sm btn-danger" onClick={() => props.onDelete(props.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
