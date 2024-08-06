import { GetTasks } from "../Layout"

const TaskItem = ({setTasks, id}) => {
    const deleteTask = ()=>{
        let tasks = GetTasks()
        tasks = tasks.filter(item => item.id !== id)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        setTasks(tasks)
    }
    return (
        <div class="my-6">
            <div
                class="flex justify-between items-center rounded-t-2xl bg-teal-600/80  w-full cursor-pointer select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="htmlCheckbox" name="languageCheckbox" class="h-6 w-6 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                    <h4 class="text-lg font-medium">How do I create an account on the website?</h4>
                </div>
                <div className="flex gap-1">
                    <button class="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
                        Edit
                    </button>
                    <button onClick={deleteTask} class="px-6 py-2 min-w-[120px] text-center text-white bg-red-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
                        Delete
                    </button>
                </div>
            </div>
            <div class="flex justify-start w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/30 bg-teal-100/50 px-4 py-4 text-teal-800">
                <h5 className="text-start">
                    To create an account, click on the "Sign Up" button located at the top right corner of the homepage.
                    <br />
                    Fill out the required information, including your name, email address, and password.
                    <br />
                    Click "Create Account" to complete the registration process
                </h5>
            </div>
        </div>
    )
}

export default TaskItem