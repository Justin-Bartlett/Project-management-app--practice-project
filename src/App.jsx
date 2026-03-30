import { useContext } from "react"

import { AppContext } from "./store/app-context"
import Sidebar from "./components/Sidebar"
import AddProject from "./components/AddProject"
import NoProjectsYet from "./components/NoProjectsYet"
import Project from "./components/Project"

function App() {
  const {
    addNewProjectStatus,
    addProjectHandler,
    projects,
    selectedProjectId,
  } = useContext(AppContext)

  return (
    <main className="w-screen h-screen my-8 flex gap-8">
      <Sidebar />
      {projects.length === 0 && !addNewProjectStatus && (
        <NoProjectsYet handleAddProjectClick={addProjectHandler} />
      )}
      {addNewProjectStatus && <AddProject />}
      {projects.length > 0 && !addNewProjectStatus && (
        <Project projectId={selectedProjectId} />
      )}
    </main>
  )
}

export default App
