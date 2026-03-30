import { useRef, useContext } from "react"

import TaskList from "./TaskList"
import ErrorModal from "./ErrorModal"
import { AppContext } from "../store/app-context"

export default function Project({ projectId }) {
  const taskRef = useRef()
  const errorRef = useRef(false)
  const dialogRef = useRef()

  const { projects, setProjects } = useContext(AppContext)

  const tasks = projects[projectId]?.tasks || []
  const nextTaskId =
    tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 0

  function addTaskHandler() {
    const taskValue = taskRef.current.value
    if (taskValue !== "") {
      const newTask = { description: taskValue, id: nextTaskId }
      const updatedTasks = [...tasks, newTask]

      const newProjects = projects.map((proj) => {
        if (proj.id === projectId) {
          return { ...proj, tasks: updatedTasks }
        } else {
          return proj
        }
      })
      setProjects(newProjects)
      taskRef.current.value = ""
    } else {
      errorRef.current = true
      dialogRef.current.open()
    }
  }

  function deleteTask(taskId) {
    const updatedTasks = tasks.filter((t) => t.id !== taskId)
    const newProjects = projects.map((proj) => {
      if (proj.id === projectId) {
        return { ...proj, tasks: updatedTasks }
      } else {
        return proj
      }
    })
    setProjects(newProjects)
  }

  return (
    <>
      {errorRef && <ErrorModal errorType="task" ref={dialogRef} />}
      <section className="w-screen justify-around gap-4">
        <article>
          <h1 className="text-2xl font-bold text-stone-700 my-4">
            {projects[projectId].title}
          </h1>
          <button>Delete</button>
          <p className="text-stone-400 mb-4">{projects[projectId].duedate}</p>
          <p className="text-stone-600 mb-4">
            {projects[projectId].description}
          </p>
        </article>
        <hr />
        <article>
          <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
          <input ref={taskRef} type="text" autoFocus />
          <button onClick={addTaskHandler}>Add Task</button>
        </article>
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </section>
    </>
  )
}
