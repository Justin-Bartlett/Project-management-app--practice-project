import { useRef } from "react"

export default function TaskList({
  setProjects,
  projects,
  projectId,
  tasks,
  deleteTask,
}) {
  return (
    <>
      {tasks.map((task) => (
        <p className="" key={task.id}>
          {task.description}
          <button onClick={() => deleteTask(task.id)} className="mx-11">
            Delete
          </button>
        </p>
      ))}
    </>
  )
}
