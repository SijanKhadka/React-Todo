import { useState, useEffect } from "react"
 
import './App.css'

import Main from "./components/Main"

function App() {
  const [tasks, setTasks] = useState([])
  // useEffect(() => {
  //   handleStateChange()
  // }, [tasks, handleStateChange])
  function handleStateChange(index) {
    const newTasks = tasks.filter(task => task.index !== index)
    setTasks(newTasks)
  }

  let user
  const localUser = localStorage.getItem('user')
  
  function setUser() {
    user = prompt('Enter your name');
    if (user){
      localStorage.setItem('user', user)
    } else if (user == null) {
      localStorage.setItem('user', '')
    } else {
      return
    }
    return 
  }

  if (localUser) {
    document.title = `${localUser}'s ToDo`
  } else if (!localUser || localUser !== null) {
    setUser()
  } else {
    document.title = 'ToDo'
  }
  

  

  return (
    <div className="app">
      {/* <input type="text">Enter your name</input>
      {/* <h1>helo</h1> */}
      {/* <h1>{`${localUser ? `${localUser}'s`: ''}`} ToDo App</h1>
      <AddTodo tasks={tasks} handleStateChange={handleStateChange}/>
      <Footer />  */}
      <Main localUser={localUser} tasks={tasks} handleStateChange={handleStateChange}/>
    </div>
  );
}

export default App
