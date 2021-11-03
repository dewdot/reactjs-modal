import { useState } from "react";

const Modal = (Props) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button className="button" onClick={() => setShowModal(true)}>{Props.buttonText}</button>
      {showModal &&
        <div className="modal" onClick={()=> setShowModal(false)}>
          <div className="modal-container container" onClick={(event) => event.stopPropagation()}>
            <div className="modeal-content">{Props.children}</div>
            <div className="modal-close"><button className="button" onClick={() => setShowModal(false)}>Close</button></div>
          </div>
        </div>
      }
    </>
  )
}

export default Modal;