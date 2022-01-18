import React from 'react'

export default function AddTodo(props) {
    const [todo, setTodo] = React.useState({ title: "", desc: "" })

    function onChange(event) {
        const { name, value } = event.target;

        setTodo((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function onSubmit(event) {
        event.preventDefault();
        if (!todo.title.trim() || !todo.desc.trim()) return;
        props.onAdd(todo);
        setTodo({
            title: "",
            desc: ""
        });
    }

    return (
        <div className="container my-3">
            <h3 className="text-center">Add Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" name="title" onChange={onChange} value={todo.title} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">ToDo Description</label>
                    <input type="text" name="desc" onChange={onChange} value={todo.desc} className="form-control" id="desc" />
                </div>
                <div className="tad">
                    <button type="submit" className="btn btn-outline-success">Add ToDo</button>
                </div>
            </form>
        </div>
    )
}
