import React from 'react'

function List({ todo }){
    const { id, title, completed} = todo
    //return <div data-testid="todo-1">{title}</div>
    const h1 = <h1>{title}</h1>
    const text = completed ? <strike>{h1}</strike> : h1
    return <div data-testid={`todo-${id}`}>{text}</div>
}

export default List;