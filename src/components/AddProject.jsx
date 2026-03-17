import { useRef, useState } from "react"

export default function AddProject({ addNewProject }) {
  const buttonStyles =
    "px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

  const titleRef = useRef()
  const descriptionRef = useRef()
  const dueDateRef = useRef()

  function clearInputFields() {
    titleRef.current.value = ""
    descriptionRef.current.value = ""
    dueDateRef.current.value = null
  }

  function handleCancelClick(e) {
    clearInputFields()
  }

  function handleSaveClick() {
    if (
      titleRef.current.value !== "" &&
      descriptionRef.current.value !== "" &&
      dueDateRef.current.value !== ""
    ) {
      const project = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        duedate: dueDateRef.current.value,
      }
      addNewProject(project)
      clearInputFields()
    }
  }

  return (
    <section className="">
      <div className="buttons">
        <button onClick={handleCancelClick} className={buttonStyles}>
          Cancel
        </button>
        <button onClick={handleSaveClick} className={buttonStyles}>
          Save
        </button>
      </div>
      <form>
        <label htmlFor="title" required>
          TITLE
        </label>
        <input id="title" ref={titleRef} type="text" required />
        <label htmlFor="description">DESCRIPTION</label>
        <textarea
          rows="4"
          cols="30"
          id="description"
          ref={descriptionRef}
          required
        />
        <label htmlFor="due-date">DUE DATE</label>
        <input id="due-date" ref={dueDateRef} type="date" required />
      </form>
    </section>
  )
}
