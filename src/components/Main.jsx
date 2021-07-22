import AddTodo from "./AddTodo"
import Footer from "./Footer"

const Main = ({ localUser, tasks, handleStateChange }) => {
    return (
        <div class="main">
            <h1>{`${localUser ? `${localUser}'s`: ''}`} ToDo App</h1>
            <AddTodo tasks={tasks} handleStateChange={handleStateChange}/>
            <Footer /> 
        </div>
    )
}

export default Main
