import React, { useState, useContext } from "react"

import ProjectList from "../components/ProjectList"
import { AppContext } from "../store/app-context"

export default function Sidebar() {
  const buttonStyles =
    "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"

  const { addProjectHandler, projects, showProject } = useContext(AppContext)
  // if I had the addNewProjectStatus state here I could use it in the button
  // onClick method and we won't need handleAddProjectClick anymore both here
  // and in App.

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <button className={buttonStyles} onClick={addProjectHandler}>
        Add Project
      </button>
      {projects.length > 0 && (
        <ProjectList projects={projects} showProject={showProject} />
      )}
    </aside>
  )
}
