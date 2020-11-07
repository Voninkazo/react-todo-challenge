import React from 'react';

function FormSubmit({handleSubmit, handleChange}) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormSubmit;