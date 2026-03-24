import { useRef, forwardRef, useImperativeHandle } from "react"
import { createPortal } from "react-dom"

const ErrorModal = forwardRef(function ErrorModal({ errorType }, ref) {
  const dialogRef = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal()
      },
    }
  })

  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={dialogRef}
    >
      <section className="">
        {errorType === "task" ? (
          <p>You haven't entered any task!</p>
        ) : (
          <p>You haven't entered enough project information</p>
        )}
      </section>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  )
})

export default ErrorModal
