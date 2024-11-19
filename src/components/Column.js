import React from "react";
import "./Column.css";

const Column = ({ title, cards, icon, handleTaskClick }) => (
  <div className="column">
    <h3>
      {icon && <img src={icon} alt={`${title} icon`} />} {title}
    </h3>
    <div>
      {cards.map((card) => (
        <div
          key={card.id}
          className="task-card"
          onClick={() => handleTaskClick(card)} 
        >
          <h4>{card.title}</h4>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Column;
