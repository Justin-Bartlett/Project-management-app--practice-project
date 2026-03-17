import { useRef } from "react"

export default function TaskList({
  setProjects,
  projects,
  projectId,
  tasks,
  setTasks,
}) {
  return (
    <>
      {tasks.map((task) => (
        <p className="" key={task.id}>
          {task.description}
          <button
            onClick={() => {
              setTasks(tasks.filter((t) => t.id !== task.id))
            }}
            className="mx-11"
          >
            Delete
          </button>
        </p>
      ))}
    </>
  )
}
