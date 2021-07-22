// import { useState } from "react"

import TodoItem from "./TodoItem"

function TodoList({ tasks, handleStateChange }) {
    // let taskList 
    // console.log(tasks)
    return (
        <div className="todo__list">
            {tasks.map(task => <TodoItem key={tasks.indexOf(task)} item={task} itemList={tasks} handleStateChange={handleStateChange}/>)}
        </div>
    )
}


export default TodoList