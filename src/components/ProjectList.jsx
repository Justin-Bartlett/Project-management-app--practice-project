import React from "react"

export default function ProjectList({ projects, showProject }) {
  const buttonStyles =
    "px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

  function handleProjectClick(projectId) {
    showProject(projectId)
  }

  return (
    <>
      <section>
        {projects.map((project) => (
          <p key={project.id}>
            <button
              className={buttonStyles}
              onClick={() => handleProjectClick(project.id)}
            >
              {project.title}
            </button>
          </p>
        ))}
      </section>
    </>
  )
}
