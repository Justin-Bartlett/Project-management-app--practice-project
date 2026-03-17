import React from "react"

import noProjectsImg from "../assets/no-projects.png"

export default function NoProjectsYet({ handleAddProjectClick }) {
  const buttonStyles =
    "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"

  return (
    <section>
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectsImg}
        alt="no projects image"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Projects created yet
      </h2>
      <p className="flex flex-col gap-1 my-4">Start creating projects</p>
      <button onClick={handleAddProjectClick} className={buttonStyles}>
        Create new project
      </button>
    </section>
  )
}
