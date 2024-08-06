import { useEffect, useState } from "react"
import TaskItem from "./TaskItem"

const TaskList = ({tasks, setTasks})=>{
    return(
        <div className="px-5">
            {tasks.map(task=><TaskItem {...task} setTasks={setTasks} />)}
        </div>
    )
}

export default TaskList