import { useRef, useState } from "react"
import TaskList from "./TaskList"

export default function Project({ setProjects, projects, projectId }) {
  const taskRef = useRef()
  const [tasks, setTasks] = useState([])
  const [nextTaskId, setNextTaskId] = useState(0)

  function addTaskHandler() {
    const taskValue = taskRef.current.value
    setTasks((tasks) => [...tasks, { description: taskValue, id: nextTaskId }])

    // add the tasks to the current project
    // setProject(prev => {
    //   ...prev,
    // })
    console.log("project = ", project)

    setNextTaskId((id) => id + 1)
    taskRef.current.value = ""
  }

  return (
    <section className="w-screen justify-around gap-4">
      <article>
        <h1 className="text-2xl font-bold text-stone-700 my-4">
          {projects[projectId].title}
        </h1>
        <button>Delete</button>
        <p className="text-stone-400 mb-4">{projects[projectId].duedate}</p>
        <p className="text-stone-600 mb-4">{projects[projectId].description}</p>
      </article>
      <hr />
      <article>
        <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
        <input ref={taskRef} type="text" />
        <button onClick={addTaskHandler}>Add Task</button>
      </article>
      <TaskList
        setProjects={setProjects}
        projects={projects}
        projectId={projectId}
        tasks={tasks}
        setTasks={setTasks}
      />
    </section>
  )
}
