import React from 'react';

function FormSubmit({handleSubmit, handleChange}) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" onChange={handleChange} placeholder="Add a todo list" required/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormSubmit;