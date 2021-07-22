import { useState } from "react"
import DeleteIcon from '@material-ui/icons/Delete';

function TodoItem({ item, itemList, handleStateChange }) {
    const [isCompleted, setIsCompleted] = useState(item.isCompleted)

    return (
        <div className={`todo__item ${isCompleted ? "completed": "not__completed"}`}>
            <input type="checkbox" checked={isCompleted} name="todo" onChange={() => {
                item.isCompleted = !item.isCompleted
                setIsCompleted(item.isCompleted)
            }} />
            <p>{item.text}</p>
            {/* <button onClick={() => console.log('hello')}><DeleteIcon /></button> */}
            <DeleteIcon onClick={() => {
                // console.log(itemList)
                let index = itemList.indexOf(item)
                itemList.splice(index, 1)
                // console.log(itemList)
                handleStateChange(index)
            }}/>
        </div>
    )
}


export default TodoItem