import React from "react";
import "./Card.css";

const Card = ({ title, priority, description, assignee }) => {
  const priorityColors = ["gray", "green", "blue", "orange", "red"];
  return (
    <div className="card" style={{ borderColor: priorityColors[priority] }}>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <p className="card-priority">Priority: {priority}</p>
      <p className="card-assignee">Assigned to: {assignee || "Unassigned"}</p>
    </div>
  );
};

export default Card;
