import { useState } from "react"
import Header from "./components/Header"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

export const GetTasks = ()=>{
    let tasks = localStorage.getItem("tasks")
    if(!tasks) return []
    tasks = JSON.parse(tasks)
    console.log(tasks)
    return tasks
}

const Layout = ()=>{
    const [formState, setFormState] = useState(false)
    const [tasks, setTasks] = useState(GetTasks())
    return(
        <div>
            <Header openForm={()=>{setFormState(true)}}/>
            <TaskList formState={formState} tasks={tasks} setTasks={setTasks} />
            <TaskForm state={formState} closeForm={()=>{setFormState(false)}} setTasks={setTasks} />
        </div>
    )
}

export default Layout