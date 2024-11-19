import React from "react";
import "./Modal.css";

const Modal = ({ task, close }) => {
  if (!task) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{task.title}</h2><br></br>
        <p><bold>{task.description}</bold></p><br></br>
        <div class="modeltext">
        <p><strong>Status:</strong> {task.status}</p>
        <p><strong>Priority:</strong> {task.priority}</p>
        <p><strong>Category:</strong> {task.category}</p>
        <button className="close-button" onClick={close}>
          &times; Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
