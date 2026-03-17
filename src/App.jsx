import { useState } from "react"

import Sidebar from "./components/Sidebar"
import AddProject from "./components/AddProject"
import NoProjectsYet from "./components/NoProjectsYet"
import Project from "./components/Project"

function App() {
  const [projects, setProjects] = useState([])
  const [addNewProjectStatus, setAddNewProjectStatus] = useState(false)
  const [addProject, setAddProject] = useState({})
  const [nextId, setNextId] = useState(0)
  const [selectedProjectId, setSelectedProjectId] = useState(null)

  function showProject(projectId) {
    setSelectedProjectId(projectId)
    setAddNewProjectStatus(false)
  }

  function addProjectHandler() {
    setAddNewProjectStatus(true)
  }

  function addNewProject(project) {
    setProjects((prev) => [
      ...prev,
      {
        title: project.title,
        duedate: project.duedate,
        description: project.description,
        id: nextId,
        tasks: [],
      },
    ])
    setNextId((n) => n + 1)
  }

  return (
    <>
      <main className="w-screen h-screen my-8 flex gap-8">
        <Sidebar
          handleAddProjectClick={addProjectHandler}
          projects={projects}
          showProject={showProject}
        ></Sidebar>
        {projects.length === 0 && !addNewProjectStatus && (
          <NoProjectsYet handleAddProjectClick={addProjectHandler} />
        )}
        {addNewProjectStatus && (
          <AddProject projects={projects} addNewProject={addNewProject} />
        )}
        {projects.length > 0 && !addNewProjectStatus && (
          <Project
            setProjects={setProjects}
            projects={projects}
            projectId={selectedProjectId}
          />
        )}
      </main>
    </>
  )
}

export default App
