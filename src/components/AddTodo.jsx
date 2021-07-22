import { useState } from "react"

import TodoList from "./TodoList"
import Button from '@material-ui/core/Button'

function AddTodo({ tasks, handleStateChange }) {
    const [item, setItem] = useState("")
    
    

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(e)
        tasks.push({
            text: e.target[0].value,
            isCompleted: false
        })
        setItem("")
    }
    
    function handleButton(e) {
        // console.log(e)
        tasks.push({
            // text: e.target[0].value,
            text: e.target.parentElement.parentElement.parentElement[0].value,
            isCompleted: false
        })
        setItem("")
    }

    return (
        <div className="add__todo">
            <form onSubmit={handleSubmit}>
                <div className="input__todo">
                    <input type="text" name="todo" placeholder="Enter your task" autoComplete="off" value={item} onChange={e => setItem(e.target.value)} />
                </div>
                <div className="submit__todo">
                    <Button variant="contained" color="primary" onClick={handleButton}>Add Todo</Button>
                </div>
            </form>
            <TodoList tasks={tasks} handleStateChange={handleStateChange}/>
        </div>
    )
}
export default AddTodo