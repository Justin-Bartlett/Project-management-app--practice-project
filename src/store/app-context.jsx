import { createContext, useState } from "react"

export const AppContext = createContext({
  projects: [
    {
      title: "",
      duedate: "", //CHECK THIS STRUCTURE LATER!!!
      description: "",
      id: undefined,
      tasks: [],
    },
  ],
  addNewProjectStatus: false,
  selectedProjectId: null,
  showProject: () => {},
  addProjectHandler: () => {},
  addNewProject: () => {},
  setProjects: () => {},
})

export default function AppContextProvider({ children }) {
  const [projects, setProjects] = useState([])
  const [addNewProjectStatus, setAddNewProjectStatus] = useState(false)
  const [nextId, setNextId] = useState(0)
  const [selectedProjectId, setSelectedProjectId] = useState(null)

  function handleShowProject(projectId) {
    setSelectedProjectId(projectId) // maybe we could just use the states that are set here
    setAddNewProjectStatus(false) // in the context so I don't need to pass the methods?
  }

  function handleSetProjects(newProjects) {
    setProjects(newProjects)
  }

  function handleAddProjectStatus() {
    setAddNewProjectStatus(true) // same here...
    console.log("AddProjectStatus just set", addNewProjectStatus)
  }

  function handleAddNewProject(project) {
    // maybe here too...
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

  const ctxValue = {
    projects: projects,
    addNewProjectStatus: addNewProjectStatus,
    selectedProjectId: selectedProjectId,
    showProject: handleShowProject,
    addProjectHandler: handleAddProjectStatus,
    addNewProject: handleAddNewProject,
    setProjects: handleSetProjects,
  }

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>
}
