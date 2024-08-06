import { useState } from "react"
import { GetTasks } from "../Layout";

function generateRandomString(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters[randomIndex];
    }
    return result;
  }

const TaskForm = ({ state, closeForm, setTasks }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const onSubmit = (event)=>{
        event.preventDefault()
        let task = {
            id: generateRandomString(),
            title: title,
            description: description
        }
        let tasks = GetTasks()
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        closeForm()
        setTasks(tasks)
    }

    return (
        <div className={`${!state && "hidden"} fixed top-0 left-0 w-screen h-screen flex justify-end`}>
            <div className="animate-from-left w-[400px] bg-white p-2 rounded-xl my-2 mr-2 flex items-center border-2 shadow-xl">
                <form className="w-full" onSubmit={onSubmit}>
                    <div className="w-full flex justify-end">
                        <svg onClick={closeForm} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </div>
                    <div className="mb-5">
                        <label for="title" className="w-full flex justify-start mb-3 text-base font-medium text-[#07074D]">
                            Task Title
                        </label>
                        <input type="text" name="name" id="name" placeholder="Title"
                        onChange={(e)=>{setTitle(e.target.value)}}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-md font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label for="description" className="w-full flex justify-start mb-3 text-base font-medium text-[#07074D]">
                            Task Description
                        </label>
                        <input type="text" name="name" id="name" placeholder="Description"
                        onChange={(e)=>{setDescription(e.target.value)}}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div>
                        <button
                            className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Create To-Do
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskForm